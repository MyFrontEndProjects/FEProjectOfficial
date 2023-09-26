import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from '../../constants/MyDataType';
import { useNavigate } from "react-router-dom";


const ProductList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<MyDataType[]>([]);
  const [Category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // async function deleteItem(id: number) {
  //   let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
  //     method: "DELETE",
  //   });
  //   result = await result.json();
  //   fetchData(); // Gọi lại fetchData sau khi xóa thành công
  //   console.warn(result);
  // }

  useEffect(() => {
    async function fetchCategory() {
      try {
        let req = await fetch("http://127.0.0.1:8000/api/getCategory");
        let response = await req.json();
        setCategories(response); // Cập nhật danh sách danh mục
      } catch (error) {
        console.error(error);
      }
    }

    fetchCategory();
  }, []);

  async function fetchData() {
    let response = await fetch("http://127.0.0.1:8000/api/list", {
      method: "POST",
      body: JSON.stringify({ selectedCategory: Category }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let result = await response.json();
    setData(result);
    console.log(result);
  }
  useEffect(() => {
    fetchData();
  }, [Category]);
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
  }

  return (
    <>
      <div className="container">
      <div className="row row-cols-2 mb-3">
          <label
            htmlFor="selectedCategory"
            className="col-2 d-flex align-self-center"
          >
            Lọc <i className="fa-solid fa-filter align-text-bottom"></i>:
          </label>
          <form className="col-7 col-md-6">
            <select
              name="selectedCategory"
              id="selectedCategory"
              className="form-select"
              onChange={(e) => {
                setCategory(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="0">Lọc</option>
              {categories.length > 0 &&
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </form>
        </div>
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
                    <Link to={"/show/"+item.id}>
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
