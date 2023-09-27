import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { CartDataType } from "../../constants/CartDataType";


const CartList = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <table className="table table-bordered border-primary table-hover table-striped">
          <thead>
            <tr className="table-primary border-primary text-center">
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th style={{ width: 150 }}>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng tiền</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item, index) => (
              <tr className="">
                <td>{index + 1}</td>

                <td>{item.name}</td>
                <td>
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
                <td >

                  <div className="container ">
                    <div className="row">
                      <div className="col-lg-2 d-flex align-items-center">
                          <Link to={"/show/" + item.product_id}>
                            <i className="bi bi-eye" />
                          </Link>
                        <span onClick={() => deleteItem(item.id)} className="mx-3">
                          <i className="bi-trash text-danger" />
                        </span>
                      </div>
                   
                        <input
                          type="number"
                          defaultValue={item.quantityPro}
                          className="form-control-sm col-lg-7 input-number px-1"
                          min={1}
                          onChange={(e) => setNewQuantity(parseInt(e.target.value))}
                        />
                        <button className="btn btn-outline-info col-lg-2 ms-3" onClick={() => updateQuantityPro(item.id)}>
                          Update
                        </button>
                  
                    </div>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartList;
