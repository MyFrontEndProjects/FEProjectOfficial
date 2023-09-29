import React, { useState, useEffect } from "react";
import { ReviewType } from "constants/ReviewType";
import { useNavigate } from "react-router-dom";
import { LoginInfo } from "services/userService";

const Review = () => {
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

  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [colClasses, setColClasses] = useState<string[]>([]);
  const [phone, setPhone] = useState<number>(1); // Đảm bảo kiểu dữ liệu là number
  const [newReview, setNewReview] = useState<string>("");

  // Mảng chứa các màu ngẫu nhiên
  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
  ];

  useEffect(() => {
    fetchData();
  }, []);
  const NoLoggedIn = () => {
    alert("Vui lòng đăng nhập để login");
    navigate("/login");
  };

  async function fetchData() {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/Reviews/getAll");
      let result = await response.json();
      setReviews(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Khởi tạo danh sách màu sắc ngẫu nhiên cho các col
    const randomColors = reviews.map(() => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    });
    setColClasses(randomColors);
  }, [reviews]);

  async function handleAddReview() {
    try {
      const data = {
        user_id: user.id,
        phone: phone,
        review: newReview,
      };

      let result = await fetch("http://127.0.0.1:8000/api/Reviews/add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      result = await result.json();

      alert(`Đã đăng đánh giá`);
      setPhone(0);
      setNewReview("");
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

 

  const randomUserIds = ["Thỏ Gấu", "Mèo", "Chuột" , "Chồn" , "Gấu Trúc" , "Rắn Xanh Lè "];

  function getRandomUserId() {
    const randomIndex = Math.floor(Math.random() * randomUserIds.length);
    return randomUserIds[randomIndex];
  }
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <h2>Danh sách đánh giá</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Người dùng</th>
            <th>Số điện thoại</th>
            <th>Đánh giá</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{getRandomUserId()}</td>
              <td>{review.phone}</td>
              <td>{review.review}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Thêm đánh giá mới</h2>

      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="phone">Số điện thoại: </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(Number(e.target.value))}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="review">Đánh giá:</label>
            <textarea
              id="review"
              name="review"
              rows={3}
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="form-control"
            />
          </div>
          {localStorage.getItem("user-info") ? (
            <button className="btn btn-primary" onClick={handleAddReview}>
              Thêm đánh giá
            </button>
          ) : (
            <button className="btn btn-primary" onClick={NoLoggedIn}>
              Thêm đánh giá
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
