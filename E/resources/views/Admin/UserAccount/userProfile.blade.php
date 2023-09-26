@extends('layouts.admin')
@section('content')
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css">
    {{-- <img src="{{ asset('upload/' .$userInfo['user']->avatar) }}" alt=""> --}}
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col col-lg-4" style="background-color: #a8eee1">
            <div class="card-block text-center text-white">
                <div class="row row-cols-lg-1">
                    <div class="col m-b-25">
                        <img src="{{ asset($userInfo['user']->avatar) }}" alt="" class="img-fluid rounded"
                            style="height: 100px" width="100px">

                    </div>
                    <div class="col text-lg-center text-start">
                        <h3 class="f-w-600">{{ $userInfo['user']->name }}</h3>
                        <p class="fs-4">{{ $userInfo['user']->role }}</p>
                        <a href="{{ route('userProfile.edit', $userInfo['user']->id) }}">
                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16 fs-4"></i>

                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card-block">
                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Thông tin</h6>
                <div class="row">
                    <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Email</p>
                        <h6 class="text-muted f-w-400">{{ $userInfo['user']->role }}</h6>
                    </div>
                    <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Phone</p>
                        <h6 class="text-muted f-w-400">{{ $userInfo['user']->phone }}</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="m-b-10 f-w-600">Address</p>
                        <span class="text-muted f-w-400">{{ $userInfo['user']->address }}</span>
                    </div>
                </div>
                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                <div class="row">
                    <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Số dư tài khoản</p>
                        <h6 class="text-muted f-w-400">{{ $userInfo['user']->balance }}</h6>
                    </div>
                </div>
                <ul class="social-link list-unstyled m-t-40 m-b-10 d-flex gap-2">
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                            data-original-title="facebook" data-abc="true"><i
                                class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                            data-original-title="twitter" data-abc="true"><i
                                class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title=""
                            data-original-title="instagram" data-abc="true"><i
                                class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

    <style>
        body {
            background-color: #f9f9fa
        }

        .padding {
            padding: 3rem !important
        }

        .user-card-full {
            overflow: hidden;
        }

        .card {
            border-radius: 5px;
            -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
            box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
            border: none;
            margin-bottom: 30px;
        }

        .m-r-0 {
            margin-right: 0px;
        }

        .m-l-0 {
            margin-left: 0px;
        }

        .user-card-full .user-profile {
            border-radius: 5px 0 0 5px;
        }

        .bg-c-lite-green {
            background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f));
            background: linear-gradient(to right, #ee5a6f, #f29263);
        }

        .user-profile {
            padding: 20px 0;
        }

        .card-block {
            padding: 1.25rem;
        }

        .m-b-25 {
            margin-bottom: 25px;
        }

        .img-radius {
            border-radius: 5px;
        }



        h6 {
            font-size: 14px;
        }

        .card .card-block p {
            line-height: 25px;
        }

        @media only screen and (min-width: 1400px) {
            p {
                font-size: 14px;
            }
        }

        .card-block {
            padding: 1.25rem;
        }

        .b-b-default {
            border-bottom: 1px solid #e0e0e0;
        }

        .m-b-20 {
            margin-bottom: 20px;
        }

        .p-b-5 {
            padding-bottom: 5px !important;
        }

        .card .card-block p {
            line-height: 25px;
        }

        .m-b-10 {
            margin-bottom: 10px;
        }

        .text-muted {
            color: #919aa3 !important;
        }

        .b-b-default {
            border-bottom: 1px solid #e0e0e0;
        }

        .f-w-600 {
            font-weight: 600;
        }

        .m-b-20 {
            margin-bottom: 20px;
        }

        .m-t-40 {
            margin-top: 20px;
        }

        .p-b-5 {
            padding-bottom: 5px !important;
        }

        .m-b-10 {
            margin-bottom: 10px;
        }

        .m-t-40 {
            margin-top: 20px;
        }

        .user-card-full .social-link li {
            display: inline-block;
        }

        .user-card-full .social-link li a {
            font-size: 20px;
            margin: 0 10px 0 0;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
    </style>
@endsection
