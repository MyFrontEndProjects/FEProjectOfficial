import React, { useState, useEffect } from "react";

//useForm và SubmitHandler từ thư viện react-hook-form cái này là để yêu cầu bắt buộc phải nhập
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  // avatar: File | null;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const {
    register, //register được sử dụng để đăng ký các quy tắc kiểm tra yêu cầu cho các trường input
    handleSubmit, //handleSubmit được sử dụng để xử lý sự kiện khi form được submit
    formState: { errors }, //formState chứa các thông tin về trạng thái của form, bao gồm các lỗi (errors)
  } = useForm<RegisterFormData>();

  // useEffect(() => {
  //   //kiểm tra xem trong localStorage có tồn tại thông tin người đăng ký hay không.
  //   //Nếu tồn tại, chúng ta sử dụng navigate để chuyển hướng đến trang /add.
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/main");
  //   }
  // }, [navigate]);

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.warn(data); //Gửi dữ liệu của biến data lên endpoint

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    result = await result.json(); 
    localStorage.setItem("user-info", JSON.stringify(result));
    console.log(result);
    navigate("/"); // Khi dữ liệu đã truyền vào thì nó sẽ chuyển đến trang main
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Đăng nhập bằng</p>
                  <button type="button" className="btn ">
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>

                  <button type="button" className="btn ">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button type="button" className="btn ">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Hay</p>
                </div>
                {/* <div className="form-outline mb-4">
                  <label htmlFor="name">Avatar:</label>
                  <input
                    type="file"
                    {...register("avatar", { required: true })}
                    className="form-control mt-2"
                    id="name"
                    placeholder="Enter full name"
                  />
                  {errors.avatar && <p role="alert">avatar is required</p>}
                </div> */}
                <div className="form-outline mb-4">
                  <label htmlFor="name">Tên tài khoản:</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="form-control mt-2"
                    id="name"
                    placeholder="Enter full name"
                  />
                  {errors.name && <p role="alert">Full name is required</p>}
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="email" className="mt-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="form-control mt-2"
                    id="email"
                    placeholder="Enter email"
                  />
                  {errors.email && <p role="alert">Email is required</p>}
                </div>
                <div>
                  <label htmlFor="password" className="mt-2">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className="form-control mt-2"
                    id="password"
                    placeholder="Enter password"
                  />
                  {errors.password && <p role="alert">Password is required</p>}
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                  type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  id="signup-button"
                   
                  >
                    Đăng Ký
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/login" className="text-danger">
                      Đăng nhập
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://evcom.com.br/wp-content/uploads/sites/4/2020/02/Banner-Como-Atuamos_1920x1080square-1024x995.png"
              alt="sample"
              className="img-fluid"
            />
          </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary fixed-bottom">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* Copyright */}
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </a>
            <a href="#!" className="text-white me-4">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            </a>
            <a href="#!" className="text-white me-4">
              <FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff" }} />
            </a>
            <a href="#!" className="text-white">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
    </>
  );
};

export default Register;
