import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from '../../constants/MyDataType';


const ProductList = () => {
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
  return (
    <>
      <div className="container">
        <table className="table table-bordered border-primary table-hover table-striped">
          <thead>
            <tr className="table-primary border-primary text-center">
              <th>#</th>
              <th>Id</th>
              <th>Full Name</th>
              <th style={{ width: 150 }}>image</th>
              <th>quantity</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Color</th>
              <th>Brand</th>
              <th>Size</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={"http://127.0.0.1:8000/" + item.file_path}
                    alt="img"
                    className="img-fluid"
                  />
                </td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.color}</td>
                <td>{item.brand}</td>
                <td>{item.size}</td>
                <td>
                  <span className="mx-1">
                    <Link to={"product/show/"+item.id}>
                    <i className="bi bi-eye" />
                    </Link>
                  </span>
                  <span className="mx-1">
                    <Link to={"productUpdate/"+item.id}>
                    <i className="bi-pencil-square text-primary" />
                    </Link>
                  </span>
                  {/* <span onClick={() => deleteItem(item.id)} className="mx-1">
                    <i className="bi-trash text-danger" />
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
