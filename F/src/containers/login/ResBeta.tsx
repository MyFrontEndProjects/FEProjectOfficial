// import { Await } from "react-router-dom";
import Input from "../../components/Input";
// import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, SubmitHandler } from "react-hook-form";
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
  // avatar: File |null;
}
const Register:React.FC =() => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/add");
  //   }
  // });
  const {
    register, //register được sử dụng để đăng ký các quy tắc kiểm tra yêu cầu cho các trường input
    handleSubmit,//handleSubmit được sử dụng để xử lý sự kiện khi form được submit
    formState: { errors },//formState chứa các thông tin về trạng thái của form, bao gồm các lỗi (errors)
  } = useForm<RegisterFormData>();
  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.warn(data); //Gửi dữ liệu của biến data lên endpoint

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    result = await result.json();// Sau khi nhận được kết quả từ serve, dữ liệu sẽ được lưu vào
    // localStorage.
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/main"); // Khi dữ liệu đã truyền vào thì nó sẽ chuyển đến trang add
  };
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/main");
    }
  });
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [avatar, setAvatar] = useState<File | null>(null);
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = e.target.files?.[0];
  //   if (selectedFile) {
  //     setAvatar(selectedFile);
  //   }
  // };

  // async function SignUp() {
  //   let item = { name, email, password, avatar };
  //   console.warn(item);

  //   let response = await fetch("http://127.0.0.1:8000/api/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept" : "application/json"
        
  //     },
  //     body: JSON.stringify(item),

  //   });
  //   let result = await response.json();
  //   console.warn(result);
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   navigate("/main");
  // }
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* <p className="text-center text-danger">{message}</p> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}

                <div className="form-outline mb-4">
                  {/* <Input
                    id="avatar"
                    label="avatar"
                    type="file"
                    autoComplete="off"
                    labelSize={3}
                    className="form-control form-control-lg"
                    // onChange={handleFileChange}
                    {...register("avatar", {required: true})}
                  />
                    {errors.avatar && <p role="alert">Full name is required</p>} */}
                  <Input
                    id="name"
                    label="User Name"
                    type="text"
                    placeholder="Enter your username"
                    autoComplete="off"
                    labelSize={3}
                    className="form-control form-control-lg"

                    {...register("name", {required: true})}
                  />
                  {errors.name && <p role="alert">Full name is required</p>}
                  <Input
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    labelSize={3}
                    className="form-control form-control-lg"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p role="alert">Email is required</p>}
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <Input
                    id="txtPassWord"
                    label="Pass Word"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="off"
                    labelSize={3}
                    maxLength={50}
                    className="form-control form-control-lg"
                    // onChange={(e) => setPassword(e.target.value)}
                    {...register("password", { required: true })}
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
                    Đăng nhập
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/login" className="text-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
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
}

export default Register;
