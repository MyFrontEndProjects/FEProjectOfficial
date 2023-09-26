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
    
    alert(`Đã thêm vào giỏ hàng `);
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
      <div className="container bg-light">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col col-lg-4">
            <div className="card-block text-center">
              <div className="row row-cols-lg-1">
                <div className="col m-b-25">
                  <img
                    src={"http://127.0.0.1:8000/" + data.file_path}
                    alt="img"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col text-lg-center text-start">
                  <h3 className="f-w-600">{data.name}</h3>
                  <p>ID: {data.id}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card-block text-black">
              <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Thông tin</h6>
              <div className="row">
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Email</p>
                  <h6 className=" f-w-400">
                    <h2>
                    {data.name}
                    </h2>
                  </h6>
                </div>
                <div className="col-sm-6">
                  <p className="m-b-10 f-w-600">Description</p>
                  <h6 className=" f-w-400">{data.description}</h6>
                </div>
              </div>
              <div>
                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                  Projects
                </h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Price</p>
                    <h6 className=" f-w-400">
                      {data.price}
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">
                      <a
                        href="{{ route('my-account.orders') }}"
                        className="text-decoration-none text-dark"
                      >
                        {data.color}
                      </a>
                    </p>
                    <h6 className=" f-w-400">
                    
                    </h6>
                  </div>
                </div>
              </div>
              <input type="number" value={Quantity} onChange={(e) => {
                     setQuantity(Number(e.target.value));
                  }} />
              <button
                    className="btn btn-success ms-2 "
                    onClick={() => handleAddToCart(data.id, data.quantity)}
                  >
                    mua
                  </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        Sản phẩm cùng loại ({data.category})  
        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
          {List.map((item) => (
            <div className="col">
              <div className="card">
              <Link to={"/show/" + item.id}>
                  <img
                    src={"http://127.0.0.1:8000/" + item.file_path}
                    alt={item.name}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <Link to={"/show/" + item.id}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="card-text">{item.description}</p>
                  
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(item.id, 1)}
                  >
                    mua
                  </button>

                  <input
                    type="number"
                    value={1}
                    name="quantity"
                    className="d-none"
                  />
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
