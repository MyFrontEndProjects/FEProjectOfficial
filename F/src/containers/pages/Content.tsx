import * as React from "react";
import "./Content.css";
import "containers/pages/Content.css";
import "font-awesome/css/font-awesome.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from 'components/Footer';
import Homesection1 from 'components/Homesection1';
import Cardsession from 'containers/pages/CardSession';



// import { useState, useEffect } from 'react';
const Content = () => {
  return (
    <>

      <div id="header-carousel" className="carousel slide d-none d-sm-block" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="border rounded-5" src="./img/bg-2.png" alt="img" style={{ width: '100%', height: '90vh' }} />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container justify-content-center">
                <div className="row align-items-center justify-content-center justify-content-lg-around">
                  <div className="col-12 col-lg-5 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      Sản phẩm mới
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      ROG Strix Scar 17 2023
                    </h1><h5>NVIDIA® GeForce RTX™ 4080 Laptop GPU</h5>
                    <a href="#a" className="btn btn-primary py-3 px-5 animated slideInDown">
                      Xem thêm <i className="fa fa-arrow-right ms-3" />
                    </a>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex animated zoomIn">
                    <img className="img-fluid" src="./img/caro-1.webp" alt="hots" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <img className="border rounded-5" src="./img/bg-1.jpg" alt="img" style={{ width: '100%', height: '90vh' }} />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-12 col-lg-5 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      Bán chạy
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      TITAN Fall 217 2023
                    </h1><h5>NVIDIA® GeForce RTX™ 4080 Laptop GPU</h5>
                    <a href="#a" className="btn btn-primary py-3 px-5 animated slideInDown">
                      Xem thêm <i className="fa fa-arrow-right ms-3" />
                    </a>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex animated zoomIn">
                    <img className="img-fluid" src="./img/caro-8.webp" alt="hots" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>






      <section className="container bg-light py-5 mt-5 border-bottom " style={{ borderTopLeftRadius: '60px', borderTopRightRadius: '60px' }}>
        <div className="row ">
          <ul className="nav">
            <li className="nav-item col-lg-3 col-md-6 col-6 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <a className="nav-link fs-1" href="#a">
                  <i className="fa-solid fa-tv fa-2x" style={{ color: '#000000' }} />
                </a>
                <span style={{ fontFamily: 'cursive' }}>MÀN HÌNH</span>
              </div>
            </li>
            <li className="nav-item col-lg-3 col-md-6 col-6 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <a className="nav-link  fs-1 " href="#a"> <i className="fa-solid fa-laptop fa-2x" style={{ color: '#000000' }} /></a>
                <span style={{ fontFamily: 'cursive' }}>LAPTOP</span>

              </div>
            </li>

            <li className="nav-item col-lg-3 col-md-6 col-6 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <a className="nav-link  fs-1 " href="#a"> <i className="fa-solid fa-headphones-simple fa-2x" style={{ color: '#000000' }} /></a>
                <span style={{ fontFamily: 'cursive' }}>TAI NGHE</span>
              </div>

            </li>
            <li className="nav-item col-lg-3 col-md-6 col-6 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <a className="nav-link  fs-1 " href="#a"> <i className="fa-regular fa-hard-drive fa-2x" style={{ color: '#000000' }} />
                </a>
                <span className="" style={{ fontFamily: 'cursive' }}>PHỤ KIỆN</span>

              </div>
            </li>


          </ul>

        </div>









      </section>
      <Homesection1 />
      {/* <Cardsession /> */}
      <Footer />
    </>
  );
};


export default Content;
