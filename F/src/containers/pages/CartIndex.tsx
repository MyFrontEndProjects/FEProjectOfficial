import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { CartDataType } from "../../constants/CartDataType";
import { LoginInfo } from "services/userService";


const CartList = () => {
  const navigate = useNavigate();
  let user: LoginInfo;

  const userString = localStorage.getItem("user-info");
  if (userString) {
    try {
      user = JSON.parse(userString);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error parsing user info:", error);
    }
  }
  const [data, setData] = useState<CartDataType[]>([]);
  const [newQuantity, setNewQuantity] = useState<number>(1);
  //   const [productInfo, setProductInfo] = useState<MyDataType | null>(null);
  console.warn(data);

  async function deleteItem(id: number) {
    let result = await fetch("http://127.0.0.1:8000/api/cart/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    fetchData(); // Gọi lại fetchData sau khi xóa thành công
    console.warn(result);
  }

  const updateQuantityPro = async (id: number) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/cart/update/${id}`,
        {
          method: "PUT", // Sử dụng phương thức PUT để cập nhật
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ quantityPro: newQuantity }), // Gửi số lượng mới
        }

      );

      if (response.ok) {
        fetchData(); // Gọi lại fetchData sau khi cập nhật thành công

      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  async function fetchData() {
    let response = await fetch("http://127.0.0.1:8000/api/cart/list");
    let result = await response.json();
    setData(result);
  }
  async function Checkout() {
    try {
      let result = await fetch("http://127.0.0.1:8000/api/checkout", {
        method: "POST",
        body: JSON.stringify({ user_id: user.id, total: totalAmount }),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      result = await result.json();
      
      console.log(result);
      navigate("/checkout");

      // Cập nhật giao diện người dùng nếu cần
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  let totalAmount = 0;
  return (
    <>

      <div className="container">
      <table className="table table-bordered border-primary table-hover table-striped">
          <thead>
            <tr className="table-primary border-primary text-center">
              <th>Tên sản phẩm</th>
              <th style={{ width: 150 }} className="d-none d-sm-table-cell">
                Hình ảnh
              </th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng tiền</th>
              <th>Chỉnh sửa số lượng</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item, index) => {
               totalAmount += item.price * item.quantityPro;
               return (
                <tr className="" key={index}>
                <td>{item.name}</td>
                <td className="d-none d-sm-table-cell">
                  <img
                    src={"http://127.0.0.1:8000/" + item.file_path}
                    alt="img"
                    className="img-fluid"
                  />
                </td>
                <td className="justify-content-around">
                  <span>{item.quantityPro}</span>
                </td>
                <td>{item.price}</td>
                <td>{item.price * item.quantityPro}</td>
                <td>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-2 col-sm-6 d-flex align-items-center">
                        <Link to={"/show/" + item.product_id}>
                          <i className="bi bi-eye" />
                        </Link>
                        <span
                          onClick={() => deleteItem(item.id)}
                          className="mx-3"
                        >
                          <i className="bi-trash text-danger" />
                        </span>
                      </div>
                      <div className="col-lg-7 col-sm-6">
                        <input
                          type="number"
                          defaultValue={item.quantityPro}
                          className="form-control input-number px-1"
                          min={1}
                          onChange={(e) =>
                            setNewQuantity(parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div className="col-lg-2 col-sm-6 d-md-flex justify-content-md-center">
                        <button
                          className="btn btn-outline-info"
                          onClick={() => updateQuantityPro(item.id)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
               )
            })}
          </tbody>
        </table>

        <div className="row row-cols-1 justify-content-end">
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <div className="card card-body mt-5">
              <h4>Tổng cộng <span className="float-end">{totalAmount}</span></h4> 
              <hr />
              <button className="btn btn-primary btn-outline" onClick={Checkout}>Thanh toán</button>        
            </div>           
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
