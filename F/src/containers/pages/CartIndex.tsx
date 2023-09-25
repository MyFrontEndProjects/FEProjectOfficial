import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { CartDataType } from "../../constants/CartDataType";
import { MyDataType } from "../../constants/MyDataType";

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
              <th>Id</th>
              <th>Tên sản phẩm</th>
              <th style={{ width: 150 }}>image</th>
              <th>Số lượng</th>
              <th>Price</th>
              <th>Tổng tiền</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item, index) => (
              <tr className="">
                <td>{index + 1}</td>
                <td>{item.product_id}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={"http://127.0.0.1:8000/" + item.file_path}
                    alt="img"
                    className="img-fluid"
                  />
                </td>
                <td className="justify-content-around">
                    <span><i className="bi bi-caret-down"></i></span>
                    
                    <span>{item.quantityPro}</span>
                    
                    <span><i className="bi bi-caret-up"></i></span>
                </td>
                <td>{item.price}</td>
                <td>{item.price * item.quantityPro}</td>
                <td>
                  <span className="mx-1">
                    <Link to={"/productList/product/show/" + item.product_id}>
                      <i className="bi bi-eye" />
                    </Link>
                  </span>
                  <span onClick={() => deleteItem(item.id)} className="mx-1">
                    <i className="bi-trash text-danger" />
                  </span>
                  <span>
                    <input
                        id = {"handle" + item.id}
                      type="number"
                      value={newQuantity}
                      onChange={(e) => setNewQuantity(parseInt(e.target.value))}
                    />
                    <button onClick={() => updateQuantityPro(item.id)}>
                      Update
                    </button>
                  </span>
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
