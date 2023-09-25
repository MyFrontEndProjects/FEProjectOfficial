import * as React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
  return (<>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Địa chỉ</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Địa chỉ: Số 123, Đường Nguyễn Văn Linh, Phường Tân Thuận Đông, Quận 12, Công Viên Phần Mềm Quang Trung, TP.HCM</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+091 091 9999</p>
            <p className="mb-2"><i className="fa fa-envelope me-3" />Dreamlaptop@gmail.com</p>
            <div className="d-flex pt-2">
              <a  href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-twitter" /></a>
              <a href="#a"  className="btn btn-outline-light btn-social"><i className="fab fa-facebook-f" /></a>
              <a  href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-youtube" /></a>
              <a   href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Thời gian hoạt động</h4>
            <h6 className="text-light">Monday - Friday:</h6>
            <p className="mb-4">07.00 AM - 10.00 PM</p>
            <h6 className="text-light">Saturday - Sunday:</h6>
            <p className="mb-0">09.00 AM - 10.00 PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Dịch vụ</h4>
            <a   href="#a"className="btn btn-link">Kiểm tra phần cứng</a>
            <a  href="#a" className="btn btn-link">Vệ sinh máy tính</a>
            <a  href="#a" className="btn btn-link">Tra keo tản nhiệt</a>
            <a  href="#a" className="btn btn-link">Dán màn hình</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Nhận thông báo</h4>
            <span>Để lại email của bạn để nhận thông báo mới nhất từ chúng tôi</span>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a  className="border-bottom" href="#a">Dream Laptop</a>, All Right Reserved.
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By <a  className="border-bottom" href="https://htmlcodex.com">Dr.Moho</a>
            </div>
            <div className="col-md-6 text-center text-md-end">

            </div>
          </div>
        </div>
      </div>
    </div>


  </>);
}

export default Footer;