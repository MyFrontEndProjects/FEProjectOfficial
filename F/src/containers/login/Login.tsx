import * as React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css";
import Input from "../../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import userService from "services/userService";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// import { Container } from "reactstrap";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/main");
    }
  });

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    // Sử dụng hàm json() để chuyển đổi kết quả thành JSON
    result = await result.json() as Response;
    // Kiểm tra nếu có token truy cập
    if (result.token) {
      // Lưu token vào localStorage
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/main");
    }
    // Nếu không có token
    else {
      // Hiển thị thông báo lỗi
      alert(result.error);
    }
  }

  const usernameRef = React.useRef<any>();
  const passwordRef = React.useRef<any>();
  const [message, setMessage] = useState("");
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    userService.login(username, password).then((res) => {
      if (res.errorCode === 0) {
        setMessage("");
        navigate("/main");
      } else {
        setMessage(res.message);
      }
    });
  };
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                alt="sample"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* <p className="text-center text-danger">{message}</p> */}
              <form onSubmit={formSubmitHandler}>
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
                  <Input
                    inputRef={usernameRef}
                    id="txtUserName"
                    label="Email"
                    type="email"
                    placeholder="Enter your username"
                    autoComplete="off"
                    labelSize={3}
                    className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <Input
                    inputRef={passwordRef}
                    id="txtPassWord"
                    label="Pass Word"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="off"
                    labelSize={3}
                    maxLength={50}
                    className="form-control form-control-lg"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={login}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
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

export default Login;
