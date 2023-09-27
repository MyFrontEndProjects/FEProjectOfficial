import * as React from "react";
import { useState, useEffect } from "react";
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
    password: string;
    balance: number;
};

const UserProfile = () => {
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
  return (
    <>
      

          
   
       <div className="row row-cols-1 row-cols-md-2">
  <div className="col col-lg-4" style={{backgroundColor: '#a8eee1'}}>
    <div className="card-block text-center text-white">
      <div className="row row-cols-lg-1">
        <div className="col m-b-25">
        <img src={"http://127.0.0.1:8000/" + user?.avatar} alt="Your Profile" className="img-fluid rounded" />
        </div>
        <div className="col text-lg-center text-start">
          <h3 className="f-w-600">{user?.name}</h3>
          <p className="fs-4">{user?.id}</p>
          <a href="{{ route('userProfile.edit', $userInfo['user']->id) }}">
            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16 fs-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="col-8">
    <div className="card-block">
      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Thông tin</h6>
      <div className="row">
        <div className="col-sm-6">
          <p className="m-b-10 f-w-600">Email</p>
          <h6 className="text-muted f-w-400">{user?.email}</h6>
        </div>
        <div className="col-sm-6">
          <p className="m-b-10 f-w-600">Phone</p>
          <h6 className="text-muted f-w-400">{user?.phone}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="m-b-10 f-w-600">Address</p>
          <h6 className="text-muted f-w-400">{user?.address}</h6>

        </div>
      </div>
      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
      <div className="row">
        <div className="col-sm-6">
          <p className="m-b-10 f-w-600">Số dư tài khoản</p>
          <h6 className="text-muted f-w-400">{user?.balance}</h6>
        </div>
      </div>
     
    </div>
  </div>
</div>


    
    </>
  );
};

export default UserProfile;