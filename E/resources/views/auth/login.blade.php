@extends('layouts.admin')
@section('content')
    <section class="py-5 d-flex justify-content-center">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <!-- Thêm container cho carousel -->
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <div id="carCarousel" class="carousel slide" data-bs-ride="carousel">
                        <!-- Hình ảnh xe hơi -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ asset('./img/store-5.png') }}" class="d-block w-100" alt="Car 1">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('./img/store-7.png') }}" class="d-block w-100" alt="Car 2">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ asset('./img/store-9.png') }}" class="d-block w-100" alt="Car 3">
                            </div>
                        </div>

                        <!-- Nút chuyển trang -->
                        <a class="carousel-control-prev" href="#carCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
                <script>
                    $(document).ready(function () {
                        // Kích hoạt Carousel và thiết lập thời gian trượt tự động
                        $('#carCarousel').carousel({
                            interval: 1700 // Đặt thời gian trượt tự động (3 giây trong ví dụ này)
                        });
                    });
                </script>

                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form action="{{ route('login') }}" method="POST">
                        @csrf
                        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                            <ul class="list-unstyled small text-muted">
                                <li>
                                    <div class="mt-4 text-white">
                                        <i
                                            class="fa-brands fa-square-facebook border border-black bg-black p-2 mt-1 fs-3"></i>
                                        <i class="fa-brands fa-google-plus-g border border-black bg-black p-2 mt-1 fs-3"
                                            style="color: #ffffff;"></i>
                                        <i class="fa-brands fa-linkedin border border-black bg-black p-2 mt-1 fs-3"></i>
                                        <i class="fa-brands fa-twitter border border-black bg-black p-2 mt-1 fs-3"></i>
                                        <i class="fa-brands fa-vk border border-black bg-black p-2 mt-1 fs-3"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <hr>
                        <!-- Email input -->
                        <div class="form-outline mt-5">
                            <input placeholder="name@mail.com" title="Input title" id="email" type="email"
                                class="form-control form-control-lg @error('email') is-invalid @enderror input_field"
                                name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                            <label class="form-label" for="email">{{ __('Email Address') }}</label>
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <input placeholder="Password" title="Inpit title" id="password" type="password"
                                class="form-control form-control-lg @error('password') is-invalid @enderror input_field"
                                name="password" required autocomplete="current-password">
                            <label class="form-label" for="password">{{ __('Password') }}</label>
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Checkbox -->
                            <div class="form-check mb-0">
                                <input class="form-check-input  me-2" type="checkbox" name="remember" id="remember"
                                    {{ old('remember') ? 'checked' : '' }}>

                                <label class="form-check-label" for="remember">
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                            @if (Route::has('password.request'))
                                <a class="text-body" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            @endif

                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">

                            <button title="Sign In" type="submit" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">
                                <span>{{ __('Sign In') }}</span>
                            </button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                                    class="link-danger">Register</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
