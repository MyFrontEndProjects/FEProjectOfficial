import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from "../../constants/MyDataType";
import { useNavigate } from "react-router-dom";
import Input from "components/Input";

const Shop = () => {
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

  useEffect(() => {
    async function fetchData() {
      try {
        // Đầu tiên, lấy danh sách danh mục
        let reqCategories = await fetch(
          "http://127.0.0.1:8000/api/getCategory"
        );
        let categoriesResponse = await reqCategories.json();
        setCategories(categoriesResponse);

        // Sau đó, lấy danh sách sản phẩm dựa trên danh mục đã chọn
        let reqProducts = await fetch("http://127.0.0.1:8000/api/list", {
          method: "POST",
          body: JSON.stringify({ selectedCategory: Category }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        let productsResponse = await reqProducts.json();
        setData(productsResponse);
        console.log(productsResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Gọi fetchData khi Component được tạo
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
  async function search(key: string) {
    console.warn(key);
    let response = await fetch("http://127.0.0.1:8000/api/search/" + key);
    let result = await response.json();
    setData(result);
  }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">

          <div className="col-lg-5 col-md-6 col-sm-12 py-2">
            <div className="row">
              <label htmlFor="selectedCategory" className="col-4 col-lg-2 d-flex align-items-center">
                Lọc <i className="ms-1 fa-solid fa-filter align-text-bottom"></i>:
              </label>
              <form className="col d-flex">
                <select
                  name="selectedCategory"
                  id="selectedCategory"
                  className="col-lg-10 col-md-8 col-8 form-control-sm"
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
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 py-2">
            <div className="row">
              <label htmlFor="SearchProduct" className="col-lg-2 col-4 d-flex align-items-center">
                Search <i className="fa-solid fa-filter align-text-bottom"></i>:
              </label>
              <input
                type="text"
                name="SearchProduct"
                id="SearchProduct"
                className="col-lg-10 col-8 form-control-sm"
                placeholder="Search"
                autoComplete="off"
                onChange={(e) => search(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-12 d-flex align-items-center justify-content-lg-end justify-content-sm-start">
            <button className="btn btn-warning ">Giỏ Hàng <i className="fa-solid fa-cart-plus" /></button>
          </div>
        </div>
      </div>


      <section className="container  py-5 d-flex justify-content-center align-items-center">
        <div className="row row-cols-1 row-cols-md-5 gy-4">
          {data.map((item) => (

            <div className="col-4">
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
                  {/* <p className="card-text">{item.description}</p> */}
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
      </section>
    </>
  );
};

export default Shop;
