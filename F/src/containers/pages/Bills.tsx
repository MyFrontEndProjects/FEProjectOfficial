import * as React from "react";
import { useState, useEffect } from "react";
import { LoginInfo } from "services/userService";
import { BillType } from "constants/BillType";
const Bills = () => {
  const [Data, setData] = useState<BillType[]>([]);
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
  useEffect(() => {
    async function fetchData() {
      try {
        // Sau đó, lấy danh sách sản phẩm dựa trên danh mục đã chọn
        let req = await fetch("http://127.0.0.1:8000/api/getCheckout", {
          method: "POST",
          body: JSON.stringify({ user_id: user.id }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        let bills = await req.json();
        setData(bills);
        console.log(bills);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Gọi fetchData khi Component được tạo
  }, []);
  return (
    <>
    
      <div className="container">
      <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                Danh sách hóa đơn
              </div>
              <div className="card-body">
                <table className="table table-bordered border-primary table-hover table-striped">
                  <thead>
                    <tr className="table-primary border-primary text-center">
                      <th>#</th>
                      <th>Mã hóa đơn</th>
                      <th>Tổng cộng</th>
                      <th>Xem sản phẩm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Bills;
