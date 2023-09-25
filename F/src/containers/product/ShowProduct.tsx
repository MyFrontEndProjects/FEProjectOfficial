import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import { MyDataType } from '../../constants/MyDataType';


const ShowProduct = () => {
  const [data, setData] = useState<MyDataType | null>(null); // Đổi state data để chứa một sản phẩm duy nhất
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("http://127.0.0.1:8000/api/show/" + id);
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setData(null); // Đặt data thành null nếu có lỗi
      }
    }

    fetchData();
  }, [id]);

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
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị các thông tin chi tiết khác của sản phẩm */}
    </>
  );
};

export default ShowProduct;
