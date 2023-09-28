import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from "../../constants/MyDataType";
import { LoginInfo } from "services/userService";
import Footer from "components/Footer";



const Shop = () => {
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

  const [data, setData] = useState<MyDataType[]>([]);

  const [Category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);



  const [Comment, setComment] = useState("");
  console.log(Comment);


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
        let reqPrice = await fetch(
          "http://127.0.0.1:8000/api/getCategory"
        );
        let categoriesResponse = await reqPrice.json();
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


  const [selectedPrice, setSelectedPrice] = useState(""); // State để lưu giá đã chọn
  const [priceOptions, setPriceOptions] = useState([]); // State để lưu danh sách giá

  // Lấy danh sách giá từ API khi component được tạo
  useEffect(() => {
    async function fetchPrice() {
      try {
        let req = await fetch("http://127.0.0.1:8000/api/getPrice");
        let response = await req.json();
        setPriceOptions(response); // Cập nhật danh sách giá
      } catch (error) {
        console.error(error);
      }
    }

    fetchPrice();
  }, []);

  // Lấy danh sách sản phẩm dựa trên giá đã chọn
  useEffect(() => {
    async function fetchData2() {
      try {
        let reqProducts = await fetch("http://127.0.0.1:8000/api/listprice", {
          method: "POST",
          body: JSON.stringify({ selectedPrice: selectedPrice }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        let productsResponse = await reqProducts.json();
        // Cập nhật danh sách sản phẩm theo giá
        setData(productsResponse); // Bạn cần tự xử lý cập nhật state hoặc hiển thị sản phẩm ở đây
        console.log(productsResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData2(); // Gọi fetchData khi Component được tạo
  }, [selectedPrice]);










  async function handleAddToCart(productId: number, userId: number) {
    try {
      if (userId === null) {
        userId = 1;
      }
      const data = {
        productId: productId,
        quantityPro: 1,
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

      alert(`Đã thêm vào giỏ hàng `);

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
  async function handleAddComment(productId: number, userId: number, comment: string) {
    try {
      if (userId === null) {
        userId = 1;
      }
      const data = {
        productId: productId,
        comment: comment,
        user_id: userId,
      };

      let result = await fetch("http://127.0.0.1:8000/api/Comment/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      result = await result.json();

      alert(` Bình luận đã được đăng `);

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
              <label
                htmlFor="selectedCategory"
                className="col-4 col-lg-2 d-flex align-items-center"
              >
                Lọc{" "}
                <i className="ms-1 fa-solid fa-filter align-text-bottom"></i>:
              </label>


              <form  className="col d-flex">
                <select
                  name="selectedCategory"
                  id="selectedCategory"
                  className="col-lg-10 col-md-8 col-8 form-control-sm"
                  onChange={(e) => {
                    if (e.target.value !== "0") {
                      // Nếu giá trị của selectedCategory không rỗng
                      // thì set selectedPrice thành giá trị mặc định (Lọc theo giá / Hủy)
                      setSelectedPrice("0");
                      setCategory(e.target.value);
                    } else {
                      console.log("Hủy được chọn");
                    }
                    console.log(e.target.value);
                  }}
                >
                  <option value="0">Lọc theo dòng sản phẩm / Hủy</option>
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>
              </form>




              <form className="col d-flex">
                <select
                  name="selectedPrice"
                  id="selectedPrice"
                  className="col-lg-10 col-md-8 col-8 form-control-sm"
                  onChange={(e) => {
                    setSelectedPrice(e.target.value);
                    
                    console.log(e.target.value);
                  }}
                >
                  <option value="">Lọc theo giá / Hủy</option>
                  {priceOptions.length > 0 &&
                    priceOptions.map((priceOption) => (
                      <option key={priceOption} value={priceOption}>
                        {priceOption}
                      </option>
                    ))}
                </select>
              </form>




            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12 py-2">
            <div className="row">
              <label
                htmlFor="SearchProduct"
                className="col-lg-2 col-4 d-flex align-items-center"
              >
                Search <i className="ms-2 fa-solid fa-magnifying-glass" />
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
            <button className="btn btn-warning ">
              {localStorage.getItem("user-info") ? (
                <>
                  <a href="/cart" className="text-decoration-none text-white">
                    Giỏ Hàng <i className="fa-solid fa-cart-plus" />
                  </a>
                </>
              ) : (
                <>
                  <a href="/login" className="text-decoration-none text-white">
                    Giỏ Hàng <i className="fa-solid fa-cart-plus" />
                  </a>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 text-center mt-5">
        <h1>Get Your Game On</h1>
      </div>


      <section className="container py-5">
        <div className="row gy-4">
          {data.map((item) => (
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4 d-flex flex-column h-100 border-0">
                <div
                  className="image-container"
                  style={{ height: 350, overflow: "hidden", marginTop: 10 }}
                >
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
                    <Link
                      to={"/show/" + item.id}
                      className="text-decoration-none text-success"
                    >
                      <h4>{item.name}</h4>
                    </Link>
                  </div>

                  <div className="row ms-3 ms-md-5 pt-3 text-black">
                    <pre className="fs-7" style={{ fontFamily: "Roboto Mono" }}>
                      {item.description}
                    </pre>
                  </div>

                  <div className="row ms-3 ms-md-5 pt-3 text-black-50">
                    <h3>
                      {item.price} <i className="fa-solid fa-lira-sign" />
                    </h3>
                  </div>

                  <div className="mt-auto">
                    <div className="container d-flex justify-content-center justify-content-md-around">
                      {localStorage.getItem("user-info") ? (
                        <>
                          <button
                            className="btn btn-outline-warning text-black"
                            onClick={() => handleAddToCart(item.id, user.id)}
                          >
                            Thêm vào giỏ hàng{" "}
                            <i className="fa-solid fa-cart-plus" />
                          </button>

                          <button
                            className="btn btn-outline-success text-black"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Bình luận <i className="fa-regular fa-credit-card" />
                          </button>
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Bình luận
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <textarea name="comment" id="comment" className="form-control" rows={3} onChange={(e) => setComment(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"

                                  >
                                    Đóng
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => handleAddComment(item.id, user.id, Comment)}
                                  >
                                    Đăng
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <button className="btn btn-outline-warning text-black">
                            <a
                              href="/login"
                              className="text-decoration-none text-black"
                            >
                              Thêm vào giỏ hàng{" "}
                              <i className="fa-solid fa-cart-plus" />
                            </a>
                          </button>

                          <button className="btn btn-outline-success text-black">
                            Bình luận <i className="fa-regular fa-credit-card" />
                          </button>
                        </>
                      )}
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
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .card-footer {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-top: 10px;\n        border-top: 1px solid #ddd;\n    }\n\n    .text-title>a {\n        text-decoration: none;\n    }\n\n    .text-title {\n        font-weight: 900;\n        font-size: 1.2em;\n        line-height: 1.5;\n    }\n\n\n    /*Button*/\n    .card-button {\n        border: 1px solid #252525;\n        display: flex;\n        padding: .3em;\n        cursor: pointer;\n        border-radius: 50px;\n        transition: .3s ease-in-out;\n    }\n\n    /*Hover*/\n    /* Khi ảnh nằm trong một container */\n    .image-container {\n        position: relative;\n        /* Để xác định vị trí tương đối */\n        overflow: hidden;\n        /* Ẩn phần ảnh vượt ra khỏi container */\n    }\n\n    /* Ảnh ban đầu */\n    .image-container img {\n        width: 100%;\n        /* Đặt chiều rộng ban đầu */\n        height: auto;\n        /* Tự động tính chiều cao */\n        transition: transform 0.3s;\n        /* Hiệu ứng chuyển đổi */\n    }\n\n    /* Ảnh khi hover */\n    .image-container:hover img {\n        transform: scale(1.1);\n        /* Phóng to ảnh khi hover */\n    }\n\n    .card-button:hover {\n        border: 1px solid #ffcaa6;\n        background-color: #ffcaa6;\n    }\n",
        }}
      />

      <Footer />
    </>
  );
};

export default Shop;
