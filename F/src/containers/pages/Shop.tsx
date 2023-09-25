import * as React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from "../../constants/MyDataType";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState<MyDataType[]>([]);
  console.warn(data);
  // async function deleteItem(id: number) {
  //   let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
  //     method: "DELETE",
  //   });
  //   result = await result.json();
  //   fetchData(); // Gọi lại fetchData sau khi xóa thành công
  //   console.warn(result);
  // }

  async function fetchData() {
    let response = await fetch("http://127.0.0.1:8000/api/list");
    let result = await response.json();
    setData(result);
  }
  useEffect(() => {
    fetchData();
  }, []);
  async function handleAddToCart(productId: number) {
    try {
      const data = {
        productId: productId,
        quantityPro: 1,
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
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-5 gy-4">
          {data.map((item) => (
            <div className="col">
              <div className="card">
                <img src={"http://127.0.0.1:8000/" + item.file_path} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  {/* <Link to={titleUrl}>
                    <h5 className="card-title ">{title}</h5>
                  </Link> */}
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(item.id)}

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

export default Shop;
