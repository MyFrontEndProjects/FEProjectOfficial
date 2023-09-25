import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyDataType } from "../../constants/MyDataType";
const ProductUpdate = () => {
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
      <h2>Chi tiết sản phẩm #{id}</h2>
    </>
  );
};

export default ProductUpdate;
