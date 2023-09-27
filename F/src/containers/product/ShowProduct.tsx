import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from '../../constants/MyDataType';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const navigate = useNavigate();
  const [Quantity, setQuantity] = useState(1);
  
  async function handleAddToCart(productId: number, quantityPro: number) {
    try {
      const data = {
        productId: productId,
        quantityPro: quantityPro,
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

      navigate("/cart");
      // Gọi phương thức POST hoặc PUT đến API Laravel
      // const response = await axios.post(`/api/cart/add/3`, data);

      // // Xử lý phản hồi từ API (nếu cần)
      console.log(result);
      // navigate("/shop");

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
                    <img
                      src={"http://127.0.0.1:8000/" + data.file_path}
                      alt="img"
                      className="img-fluid rounded"
                    />
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
                    onClick={() => handleAddToCart(data.id, Quantity)}
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
          <Link to={"/show/" + item.id}>
            <img
              src={"http://127.0.0.1:8000/" + item.file_path}
              alt={item.name}
              className="card-img-top "
            />
          </Link>
          <div className="card-body flex-grow-1 d-flex flex-column">
            <div className="row text-center mb-3">
              <Link to={"/show/" + item.id} className="text-decoration-none text-success">
                <h4>{item.name}</h4>
              </Link>
            </div>

            <div className="row ms-3 ms-md-5 pt-3 text-black">
              <span>{item.description}</span>
            </div>

            <div className="row ms-3 ms-md-5 pt-3 text-black-50">
              <h3>{item.price} <i className="fa-solid fa-lira-sign" /></h3>
            </div>

            <div className="mt-auto">
              <div className="container d-flex justify-content-center justify-content-md-around">
                <button className="btn btn-outline-warning text-black" onClick={() => handleAddToCart(item.id , 1)}>
                  Thêm vào giỏ hàng <i className="fa-solid fa-cart-plus" />
                </button>

                <button className="btn btn-outline-success text-black">
                  Mua ngay <i className="fa-regular fa-credit-card" />
                </button>
              </div>

              <input
                type="number"
                value={1}
                name="quantity"
                className="d-none"
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>





      

      

    </>
  );
};

export default ShowProduct;
