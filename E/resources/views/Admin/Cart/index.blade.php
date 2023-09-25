@extends('layouts.admin')
@section('title', $Data['title'])
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="container">
                <div class="row">
                    @if (session('product_not_found'))
                        <script>
                            alert('{{ session('product_not_found') }}');
                        </script>
                    @endif
                    <div class="col-11">
                        <span>Danh sách sản phẩm được đặt</span>
                    </div>
                    <div class="col-1">
                        <span>
                            <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create">
                                <i class="fa-solid fa-plus"></i>Thêm
                            </a>
                            <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Thêm sản Sản phẩm mới</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            @if ($errors->any())
                                                <ul class="alert alert-danger list-unstyled">
                                                    @foreach ($errors->all() as $error)
                                                        <li>- {{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            @endif
                                            <form method="POST" action="{{ route('admin.cart.add') }}"
                                                enctype="multipart/form-data">
                                                @csrf <!-- bảo vệ sự tấn công CSRF -->
                                                <!-- add form controls to create product -->

                                                <label class="col-lg col-md-6 col-sm-12 col-form-label">Mã sản phẩm</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="productId" value="{{ old('productId') }}" type="text"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Số lượng:</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="quantityPro" value="{{ old('quantityPro') }}"
                                                        type="number" class="form-control">
                                                </div>
                                                <button type="submit" class="btn btn-primary mt-2">Thêm</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>


            </div>
        </div>
        <div class="card-body">
            <table class="table table-borderd table-striped">
                <thead>
                    <tr class="text-center">
                        <th scope="col">STT</th>
                        <th scope="col">ID</th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $counter = 1;
                    @endphp
                    @foreach ($Data['carts'] as $cart)
                        <tr class="text-center">
                            <td>{{ $counter }}</td>
                            <td>{{ $cart->id }}</td>
                            <td>{{ $cart->product_id }}</td>
                            <td>{{ $cart->name }}</td>
                            <td class="col-2">
                                <img src={{ asset($cart->file_path) }} alt="image" class="img-fluid">
                            </td>
                            <td>
                                <a class="btn btn-primary" href="{{ route('admin.cart.edit', ['id' => $cart->id]) }}">
                                    <i class="bi-pencil"></i>
                                </a>
                            </td>
                            <td>
                                <form action="{{ route('admin.cart.delete', $cart->id) }}" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <button class="btn btn-danger" onclick="return confirm('Bạn có chắc chắn muốn xóa?');">
                                        <i class="bi-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @php
                            $counter++;
                        @endphp
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
