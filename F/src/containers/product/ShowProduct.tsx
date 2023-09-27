import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from '../../constants/MyDataType';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type LoginInfo = {
  id: number;
  name: string;
  email: string;
  accessToken: string;
  avatar: string;
  role: string;
  phone: string;
  address: string;
  api_token: string;
  balance: number;
};
const ShowProduct = () => {
  let user: LoginInfo;

  // Lấy giá trị từ localStorage và kiểm tra nếu có
  const userString = localStorage.getItem("user-info");
  if (userString) {
    try {
      user = JSON.parse(userString);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error parsing user info:", error);
    }
  }
  const navigate = useNavigate();
  const [Quantity, setQuantity] = useState(1);

  async function handleAddToCart(productId: number, userId: number, quantity: number) {
    try {
      if (userId === null) {
        userId = 1;
      }
      const data = {
        productId: productId,
        quantityPro: quantity,
        user_id: userId,
      };

      let result = await fetch("http://127.0.0.1:8000/api/cart/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      result = await result.json();
      // alert(`Đã thêm vào giỏ hàng `);

      // Gọi phương thức POST hoặc PUT đến API Laravel
      // const response = await axios.post(`/api/cart/add/3`, data);

      // // Xử lý phản hồi từ API (nếu cần)
      console.log(result);
      // navigate("/shop");
      navigate("/cart");
      // Cập nhật giao diện người dùng nếu cần
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
    }
  }
  const [data, setData] = useState<MyDataType | null>(null); // Đổi state data để chứa một sản phẩm duy nhất
  const { id } = useParams<{ id: string }>();
  const [List, setList] = useState<MyDataType[]>([]);
  // Tạo state khác để lưu giá trị mặc định của Category
  const [defaultCategory, setDefaultCategory] = useState<string>("");
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("http://127.0.0.1:8000/api/show/" + id);
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        let result = await response.json();

        // Cập nhật giá trị mặc định của Category
        setDefaultCategory(result.category);

        setData(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setData(null);
      }
    }

    fetchData();
  }, [id]);


  useEffect(() => {
    async function fetchData() {
      try {
        let reqProducts = await fetch("http://127.0.0.1:8000/api/list", {
          method: "POST",
          body: JSON.stringify({ selectedCategory: defaultCategory }), // Sử dụng giá trị mặc định của Category
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        let productsResponse = await reqProducts.json();
        setList(productsResponse);
        console.log(productsResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [defaultCategory]); // Khi giá trị mặc định của Category thay đổi, gọi fetchData



  if (!data) {
    return (
      <>
        <div className="container">
          <div>Đang tải hoặc không tìm thấy sản phẩm.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container bg-light rounded-5 p-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-4">
                    <div className="image-container" style={{ overflow: 'hidden', marginTop: 10 }}>
                      <img
                        src={"http://127.0.0.1:8000/" + data.file_path}
                        alt="img"
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 text-center text-md-start">
                    <h3 className="fw-bold">{data.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="card text-black">
              <div className="card-body">
                <h6 className="mb-4 pb-2 border-bottom fw-bold">Thông tin</h6>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p className="fw-bold">Description</p>
                    <h6>{data.description}</h6>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="mb-2 pb-2 border-bottom fw-bold">Projects</h6>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <p className="fw-bold">Price</p>
                      <h3 className="text-black-50"> {data.price} <i className="fa-solid fa-lira-sign" /></h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    min="1"
                    value={Quantity}
                    onChange={(e) => {
                      setQuantity(Number(e.target.value));
                    }}
                  />
                  <button
                    className="btn btn-success ms-2"
                    onClick={() => handleAddToCart(data.id, user.id, Quantity)}
                  >
                    Mua
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container py-5">
        <h2>Sản phẩm cùng loại ({data.category})</h2>
        <div className="row gy-4">
          {List.map((item) => (
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4 d-flex flex-column h-100 border-0">

                <div className="image-container" style={{ height: 350, overflow: 'hidden', marginTop: 10 }}>
                  <Link to={"/show/" + item.id}>
                    <img
                      src={"http://127.0.0.1:8000/" + item.file_path}
                      alt={item.name}
                      className="card-img-top img-card"
                    />
                  </Link>
                </div>

                <div className="card-body flex-grow-1 d-flex flex-column">
                  <div className="row text-center mb-3">
                    <Link to={"/show/" + item.id} className="text-decoration-none text-success">
                      <h4>{item.name}</h4>
                    </Link>
                  </div>

                  <div className="row ms-3 ms-md-5 pt-3 text-black">
                    <pre className="fs-7" style={{ fontFamily: "Roboto Mono" }}>
                      <span>{item.description}</span>
                    </pre>
                  </div>

                  <div className="row ms-3 ms-md-5 pt-3 text-black-50">
                    <h3>{item.price} <i className="fa-solid fa-lira-sign" /></h3>
                  </div>

                  <div className="mt-auto">
                    <div className="container d-flex justify-content-center justify-content-md-around">
                      <button className="btn btn-outline-warning text-black" onClick={() => handleAddToCart(item.id, user.id, 1)}>
                        Thêm vào giỏ hàng <i className="fa-solid fa-cart-plus" />
                      </button>

                      <button className="btn btn-outline-success text-black">
                        Mua ngay <i className="fa-regular fa-credit-card" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: "\n    .card-footer {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-top: 10px;\n        border-top: 1px solid #ddd;\n    }\n\n    .text-title>a {\n        text-decoration: none;\n    }\n\n    .text-title {\n        font-weight: 900;\n        font-size: 1.2em;\n        line-height: 1.5;\n    }\n\n\n    /*Button*/\n    .card-button {\n        border: 1px solid #252525;\n        display: flex;\n        padding: .3em;\n        cursor: pointer;\n        border-radius: 50px;\n        transition: .3s ease-in-out;\n    }\n\n    /*Hover*/\n    /* Khi ảnh nằm trong một container */\n    .image-container {\n        position: relative;\n        /* Để xác định vị trí tương đối */\n        overflow: hidden;\n        /* Ẩn phần ảnh vượt ra khỏi container */\n    }\n\n    /* Ảnh ban đầu */\n    .image-container img {\n        width: 100%;\n        /* Đặt chiều rộng ban đầu */\n        height: auto;\n        /* Tự động tính chiều cao */\n        transition: transform 0.3s;\n        /* Hiệu ứng chuyển đổi */\n    }\n\n    /* Ảnh khi hover */\n    .image-container:hover img {\n        transform: scale(1.1);\n        /* Phóng to ảnh khi hover */\n    }\n\n    .card-button:hover {\n        border: 1px solid #ffcaa6;\n        background-color: #ffcaa6;\n    }\n" }} />








    </>
  );
};

export default ShowProduct;
