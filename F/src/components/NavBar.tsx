import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { MyDataType } from "../constants/MyDataType";
import { NavLink, Link, useNavigate } from "react-router-dom";
type LoginInfo  = {
  id: number;
  name: string;
  email: string;
  accessToken: string;
  avatar: string;
  role: string;
  phone: string;
  address: string;
  api_token: string;
  balance: number;
};
const OffcanvasExample = () => {
  let user: LoginInfo | null = null;

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
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [data, setData] = useState<MyDataType[]>([]);

  async function search(key: string) {
    console.warn(key);
    let response = await fetch("http://127.0.0.1:8000/api/search/" + key);
    let result = await response.json();
    setData(result);
  }
  return (
    <>

      <Navbar expand="md" className="bg-body-tertiary py-0 fixed-top bg-dark">
        <Container fluid className="bg-dark">
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            className="bg-light"
          />
          <Navbar.Brand className="d-flex align-content-center">
            <NavLink to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 64 64"
              >
                <linearGradient
                  id="k41MFBC-6nrNxSe9HVK3Ya_hotvQzjQoPwi_gr1"
                  x1="32"
                  x2="32"
                  y1="-3.216"
                  y2="53.794"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6dc7ff"></stop>
                  <stop offset=".492" stop-color="#aab9ff"></stop>
                  <stop offset="1" stop-color="#e6abff"></stop>
                </linearGradient>
                <path
                  fill="url(#k41MFBC-6nrNxSe9HVK3Ya_hotvQzjQoPwi_gr1)"
                  d="M52,33c0,7.504-9.448,18.381-15.5,25.183c-2.399,2.696-6.599,2.692-8.992-0.01 C21.456,51.342,12,40.411,12,33c0-4.608,0.152-10.159,1-14c2.006-9.084,8.992-13.792,16.089-15.475 c1.863-0.442,3.801-0.447,5.66,0.01C41.304,5.148,48.899,9.437,51,18C52,22.076,52,28.005,52,33z"
                ></path>
                <path
                  fill="#fff"
                  d="M29.557,47.334c-1.069-4.501-3.515-12.759-11.795-13.954c-0.574-0.083-1.111,0.31-1.175,0.887 c-0.742,6.642,6.166,12.562,11.684,14.245C29.018,48.739,29.738,48.094,29.557,47.334z"
                ></path>
                <path
                  fill="#fff"
                  d="M34.561,47.334c1.069-4.501,3.515-12.759,11.795-13.954c0.574-0.083,1.111,0.31,1.175,0.887 c0.742,6.642-6.166,12.562-11.684,14.245C35.1,48.739,34.38,48.094,34.561,47.334z"
                ></path>
                <linearGradient
                  id="k41MFBC-6nrNxSe9HVK3Yb_hotvQzjQoPwi_gr2"
                  x1="32"
                  x2="32"
                  y1="-1.991"
                  y2="61.455"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1a6dff"></stop>
                  <stop offset="1" stop-color="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#k41MFBC-6nrNxSe9HVK3Yb_hotvQzjQoPwi_gr2)"
                  d="M52.94,17.52 c-0.91-3.7-4.45-12.66-17.71-15.93c-1.08-0.26-2.2-0.4-3.32-0.4c-1.1,0-2.2,0.13-3.28,0.39c-9.28,2.2-15.68,8.39-17.58,16.99 C10.11,22.82,10,28.84,10,33c0,5.42,4.24,15.26,16.13,26.62c1.64,1.57,3.73,2.43,5.89,2.43c2.16,0,4.24-0.86,5.87-2.43 C51.91,46.13,54,37.15,54,33C54,27.76,54,21.83,52.94,17.52z M32.02,59.05c-1.38,0-2.74-0.57-3.82-1.6C20.63,50.22,13,39.86,13,33 c0-4.02,0.1-9.82,0.98-13.78c1.64-7.43,7.23-12.8,15.34-14.72c0.86-0.21,1.73-0.31,2.59-0.31c0.88,0,1.75,0.11,2.6,0.32 c3.89,0.95,13.18,4.2,15.52,13.73C51,22.2,51,28.19,51,33c0,6.34-5.4,15.03-15.19,24.46C34.74,58.49,33.4,59.05,32.02,59.05z"
                ></path>
                <path
                  fill="#fff"
                  d="M51,18C48.9,9.44,41.3,5.15,34.75,3.54c-0.93-0.23-1.88-0.35-2.84-0.35c-0.94,0-1.89,0.11-2.82,0.33 C21.99,5.21,15.01,9.92,13,19c-0.85,3.84-1,9.39-1,14c0,7.41,8,18,15.51,25.17c1.31,1.25,2.91,1.88,4.51,1.88 c1.59,0,3.18-0.62,4.48-1.87C45,50,52,40.5,52,33C52,28.01,52,22.08,51,18z M32.02,58.05c-1.12,0-2.24-0.47-3.13-1.32 C21.48,49.65,14,39.56,14,33c0-6.23,0.31-10.66,0.95-13.57c2.13-9.64,10.06-12.88,14.6-13.96c0.78-0.18,1.57-0.28,2.36-0.28 c0.8,0,1.59,0.1,2.36,0.29c3.71,0.91,12.58,4,14.79,13C50,22.32,50,28.24,50,33c0,5.98-5.43,14.63-14.89,23.74 C34.22,57.6,33.15,58.05,32.02,58.05z M51,18C48.9,9.44,41.3,5.15,34.75,3.54c-0.93-0.23-1.88-0.35-2.84-0.35 c-0.94,0-1.89,0.11-2.82,0.33C21.99,5.21,15.01,9.92,13,19c-0.85,3.84-1,9.39-1,14c0,7.41,8,18,15.51,25.17 c1.31,1.25,2.91,1.88,4.51,1.88c1.59,0,3.18-0.62,4.48-1.87C45,50,52,40.5,52,33C52,28.01,52,22.08,51,18z M32.02,58.05 c-1.12,0-2.24-0.47-3.13-1.32C21.48,49.65,14,39.56,14,33c0-6.23,0.31-10.66,0.95-13.57c2.13-9.64,10.06-12.88,14.6-13.96 c0.78-0.18,1.57-0.28,2.36-0.28c0.8,0,1.59,0.1,2.36,0.29c3.71,0.91,12.58,4,14.79,13C50,22.32,50,28.24,50,33 c0,5.98-5.43,14.63-14.89,23.74C34.22,57.6,33.15,58.05,32.02,58.05z M51,18C48.9,9.44,41.3,5.15,34.75,3.54 c-0.93-0.23-1.88-0.35-2.84-0.35c-0.94,0-1.89,0.11-2.82,0.33C21.99,5.21,15.01,9.92,13,19c-0.85,3.84-1,9.39-1,14 c0,7.41,8,18,15.51,25.17c1.31,1.25,2.91,1.88,4.51,1.88c1.59,0,3.18-0.62,4.48-1.87C45,50,52,40.5,52,33C52,28.01,52,22.08,51,18z M32.02,58.05c-1.12,0-2.24-0.47-3.13-1.32C21.48,49.65,14,39.56,14,33c0-6.23,0.31-10.66,0.95-13.57 c2.13-9.64,10.06-12.88,14.6-13.96c0.78-0.18,1.57-0.28,2.36-0.28c0.8,0,1.59,0.1,2.36,0.29c3.71,0.91,12.58,4,14.79,13 C50,22.32,50,28.24,50,33c0,5.98-5.43,14.63-14.89,23.74C34.22,57.6,33.15,58.05,32.02,58.05z"
                ></path>
              </svg>
            </NavLink>
            
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className="d-none d-md-flex align-self-center text-center text-uppercase fw-bold text-white me-3"
            >
              <div
                className="align-self-center"
                style={{ fontFamily: "cursive" }}
              >
                Dream Laptop
              </div>
            </NavLink>

            <NavLink
              to="/shop"
              style={{ textDecoration: "none" }}
              className="d-none d-md-flex align-self-center text-center text-uppercase fw-bold text-white me-3"
            >
              <div
                className="align-self-center"
                style={{ fontFamily: "cursive" }}
              >
                Store <i className="fa-solid fa-store "></i>
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none" }}
              className="d-none d-md-flex align-self-center text-center text-uppercase fw-bold text-white me-3"
            >
              <div
                className="align-self-center"
                style={{ fontFamily: "cursive" }}
              >
                Contact <i className="fa-solid fa-inbox" />
              </div>
            </NavLink>
            <NavLink
              to="/about us"
              style={{ textDecoration: "none" }}
              className="d-none d-md-flex align-self-center text-center text-uppercase fw-bold text-white me-3"
            >
              <div
                className="align-self-center"
                style={{ fontFamily: "cursive" }}
              >
                About us <i className="fa-regular fa-address-card" />
              </div>
            </NavLink>
            <Link
              to="http://localhost:8000/login"
              target="_blank"
              className="nav-link d-none d-md-flex align-self-center text-center text-uppercase fw-bold text-white me-3"
              style={{ textDecoration: "none" }}
            >
              <div
                className="align-self-center"
                style={{ fontFamily: "cursive" }}
              >
                Quản trị <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />

          <Navbar.Offcanvas style={{ fontFamily: "cursive" }}
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton className="bg-dark text-white">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Dream Laptop
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="bg-dark navbar-dark">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-uppercase fw-bold ">
                {localStorage.getItem("user-info") ? (
                  <>
                    <NavDropdown
                      title={
                        <span className="text-white my-auto">Product</span>
                      }
                    // className="nav-item"
                    >
                      <NavDropdown.Item href="#action3">
                        <NavLink to="/add" className="nav-link text-black">
                          Add
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        <NavLink to="/productList" className="text-black nav-link">
                          ProductList
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        <NavLink
                          to="productList/productUpdate/:id"
                          className="nav-link text-black"
                        >
                          Update Product
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title={
                        <span className="text-white my-auto">
                          {user ? user.name : "Guest"}
                        </span>
                      }
                      id={`offcanvasUserNavbarDropdown-expand-md`}
                      className="nav-item "
                    >
                      <NavDropdown.Item onClick={LogOut}>
                        Logout
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="text-black">
                      <NavLink
                          to="/profile"
                          className="nav-link text-black"
                        >
                          My Profile
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <NavDropdown
                      title={
                        <span
                          className="text-white my-auto"
                          style={{ fontFamily: "cursive" }}
                        >
                          User <i className="fa-regular fa-user" />
                        </span>
                      }
                      id={`offcanvasNavbarDropdown-expand-md`}
                      className="nav-item"
                    >
                      <NavDropdown.Item href="#action3">
                        <NavLink to="/login" className="nav-link text-black">
                          Login
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        <NavLink to="/register" className="nav-link text-black">
                          Register
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </>
  );
};

export default OffcanvasExample;
