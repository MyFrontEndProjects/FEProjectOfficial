import * as React from "react";
import { useState, useEffect } from "react";
import { LoginInfo } from "services/userService";
import { BillType } from "constants/BillType";
const Checkout = () => {
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
        let req = await fetch("http://127.0.0.1:8000/api/getId", {
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
        {Data.map((data) => (
          <>
            <div className="row text-wrap">
              <span className="fs2">Đặt hàng thành công!!!</span>
              <span className="fs-">
                <div className="alert alert-success" role="alert">
                  Hóa đơn của bạn có id là
                  <b>
                  {" "}{data.id}
                  </b>
                </div>
              </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Checkout;
