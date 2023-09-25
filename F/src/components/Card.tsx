import React from "react";
import { useNavigate, Link } from "react-router-dom";

interface CardProps {
  CardClass?: string;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  titleUrl: string;
  pageUrl?: string; // Thêm thuộc tính pageUrl cho đường dẫn đến trang cần điều hướng
  buyBtn?: string; // Thêm thuộc tính pageUrl cho đường dẫn đến trang cần điều hướng
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  pageUrl,
  CardClass,
  titleUrl,
  buyBtn,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (pageUrl) {
      // Nếu có pageUrl, điều hướng đến trang được truyền vào khi nút được nhấn
      navigate(pageUrl);
    }
  };

  return (
    <div className={CardClass + " card"}>
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <Link to={titleUrl}>
        <h5 className="card-title ">{title}</h5>

        </Link>
        <p className="card-text">{description}</p>
        <button className="btn btn-success" onClick={handleButtonClick}>
          {buttonText}
        </button>
        <button className="btn btn-success">
          {buttonText}
        </button>
        <input type="number" value={1} name="quantity" className="d-none" />
      </div>
    </div>
  );
};

export default Card;
