@extends('layouts.app')
@section('title', $storeData['title'])

@section('sect5')
    <div class="container-fluid bg-dark-subtle py-4 my-2 rounded-5 d-flex align-items-center ">
        <div class="container ">
            <div class="col-12 mb-2">
                <div class="d-flex row-cols align-items-canter">
                    <label class="mt-2">Bộ lọc <i class="fa-solid fa-filter"></i>:</label>
                    <form action="{{ route('filterStores') }}" method="POST" id="myForm">
                        @csrf
                        <select name="selectedCategory" id="selectedCategory" class="form-select ms-3">
                            <option value="0">Lọc theo hãng xe</option>
                            @php
                                $uniqueCategories = [];
                            @endphp

                            @foreach ($storeData['stores'] as $store)
                                @if (!in_array($store->category, $uniqueCategories))
                                    <option value="{{ $store->category }}">
                                        {{ $store->category }}
                                    </option>
                                    @php
                                        $uniqueCategories[] = $store->category;
                                    @endphp
                                @endif
                            @endforeach
                        </select>

                    </form>
                    <div class="col mx-5">
                        <a href="/store/index" class="btn btn-outline-light">Hủy lọc</a>
                    </div>
                    <div class="d-flex justify-content-end">
                        <div class="col mx-5 ">
                            <a href="/cart" class="btn btn-warning">Giỏ hàng <i class="fa-solid fa-cart-plus"></i></a>
                        </div>
                    </div>

                </div>

            </div>

            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 gap-3">
                @isset($storeData['selectedResults'])
                    @foreach ($storeData['selectedResults'] as $store)
                        <div class="col-md-4 col-lg-4 col-sm-12 mb-2 d-flex row">
                            <div class="card">
                                <div class="image-container" style="height: 350px; overflow: hidden; margin-top: 10px;">
                                    <a href="{{ route('store.show', ['id' => $store->id]) }}">
                                        <img src="{{ route('store.showImage', ['filename' => $store['image']]) }}"
                                            alt="image" class="card-img-top img-card">
                                    </a>
                                </div>
                                <div class="position-absolute mt-2">
                                    <i class="fa-regular fa-bookmark fa-2x " style="color: #d03809"></i> <span class="fs-3"style="color: #d03809">{{ $store->condition}}</span>
                                </div>

                                <div class="card-footer">
                                    <span class="text-title">
                                        <div class="row">

                                            <div class="col-12">
                                                <a href="{{ route('store.show', ['id' => $store->id]) }}"
                                                    class="text-capitalize text-black" style="text-decoration: none;">
                                                    {{ $store->name }}
                                                </a>
                                            </div>


                                            <div class="col" style="color: #d03809">
                                                {{ $store->price }}$
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div class="row-cols card-footer">
                                    <a class="btn btn-warning my-2 mx-2 text-white">
                                        <form action="{{ route('cart.addNew', ['id' => $store->id]) }}" method="post" style="margin: 0">
                                            @csrf
                                            <input type="number" name="quantity" min="1" max="20" id="quantity"
                                            class="d-none" value="1" style="width: 50px">
                                            <button type="submit" style="border: none; padding:0; margin:0;" class=" bg-warning text-uppercase text-white fw-bold">
                                                Thêm vào giỏ hàng
                                            </button>
                                        </form>
                                    </a>
                                    <a href="" class="btn btn-primary my-2 mx-2">
                                        <form action="{{ route('cart.add', ['id' => $store->id]) }}" method="post" style="margin: 0">
                                            @csrf
                                            <input type="number" name="quantity" min="1" max="20" id="quantity"
                                            class="d-none" value="1" style="width: 50px">
                                            <button type="submit" style="border: none; padding:0; margin:0;" class=" bg-primary text-uppercase text-white fw-bold">
                                                Mua ngay
                                            </button>
                                        </form>
                                    </a>
                                    <a href="{{ route('store.show', ['id' => $store->id]) }}" class="text-capitalize col">
                                        <div class="card-button" type="submit">
                                            <svg fill="#000000" height="30px" width="30px" version="1.1" id="Icons"
                                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 32 32" xml:space="preserve">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                                </g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M24,16c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S28.4,16,24,16z M27,25h-2v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2h-2 c-0.6,0-1-0.4-1-1s0.4-1,1-1h2v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2h2c0.6,0,1,0.4,1,1S27.6,25,27,25z">
                                                    </path>
                                                    <path
                                                        d="M8.4,22l1.2-2.3c0.5-1,1.5-1.7,2.7-1.7h3.5c0.1,0,0.2,0,0.2,0c1.8-2.4,4.7-4,8-4c1.2,0,2.3,0.2,3.4,0.6 C27,14,26.5,13.4,26,13h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2.8L23,8c-0.8-1.8-2.6-3-4.6-3H9.6C7.6,5,5.8,6.2,5,8l-1.3,3H1 c-0.6,0-1,0.4-1,1s0.4,1,1,1h1c-1.2,0.9-2,2.4-2,4v4c0,0.9,0.4,1.7,1,2.2V25c0,1.7,1.3,3,3,3h2c1.7,0,3-1.3,3-3v-1h5 c0-0.7,0.1-1.4,0.2-2H8.4z M7,19H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S7.6,19,7,19z M5.5,12l1.4-3.2C7.4,7.7,8.4,7,9.6,7 h8.7c1.2,0,2.3,0.7,2.8,1.8l1.4,3.2H5.5z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    @endforeach
                @endisset
            </div>
        </div>

     
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                document.querySelector("#selectedCategory").addEventListener("change", function() {
                    // Submit the form when an option is selected
                    document.querySelector("#myForm").submit();
                });
            });
        </script>
    </div>
@endsection
<style>
    .card-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        border-top: 1px solid #ddd;
    }

    .text-title>a {
        text-decoration: none;
    }

    .text-title {
        font-weight: 900;
        font-size: 1.2em;
        line-height: 1.5;
    }


    /*Button*/
    .card-button {
        border: 1px solid #252525;
        display: flex;
        padding: .3em;
        cursor: pointer;
        border-radius: 50px;
        transition: .3s ease-in-out;
    }

    /*Hover*/
    /* Khi ảnh nằm trong một container */
    .image-container {
        position: relative;
        /* Để xác định vị trí tương đối */
        overflow: hidden;
        /* Ẩn phần ảnh vượt ra khỏi container */
    }

    /* Ảnh ban đầu */
    .image-container img {
        width: 100%;
        /* Đặt chiều rộng ban đầu */
        height: auto;
        /* Tự động tính chiều cao */
        transition: transform 0.3s;
        /* Hiệu ứng chuyển đổi */
    }

    /* Ảnh khi hover */
    .image-container:hover img {
        transform: scale(1.1);
        /* Phóng to ảnh khi hover */
    }

    .card-button:hover {
        border: 1px solid #ffcaa6;
        background-color: #ffcaa6;
    }
</style>
