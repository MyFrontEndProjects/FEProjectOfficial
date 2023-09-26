@extends('layouts.admin')
@section('title', $Data['title'])
@section('content')
<div class="card">
    <div class="card-header">
        <div class="container">
            <div class="row">
                <div class="col-11">
                    <span>Danh sách sản phẩm</span>
                </div>
                <div class="col-1">
                    <span>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#create">
                            <i class="fa-solid fa-plus"></i>
                        </button>
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
                                        <form method="POST" action="{{ route('admin.store.create') }}"
                                            enctype="multipart/form-data">
                                            @csrf <!-- bảo vệ sự tấn công CSRF -->
                                            <!-- add form controls to create product -->
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Tên:</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="name" value="{{ old('name') }}" type="text"
                                                    class="form-control">
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Loại:</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="category" value="{{ old('category') }}" type="text"
                                                    class="form-control">
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Giá:</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="price" value="{{ old('price') }}" type="number"
                                                    class="form-control">
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Số lượng:</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="quantity" value="{{ old('quantity') }}" type="number"
                                                    class="form-control">
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Thương hiệu</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="brand" value="{{ old('brand') }}" type="text"
                                                    class="form-control">
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Hình ảnh:</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input class="form-control" type="file" name="file_path">
                                            </div>

                                            <div class="mb-3">
                                                <label class="form-label">Thông tin:</label>
                                                <textarea class="form-control" name="description" rows="3">{{ old('description') }}</textarea>
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Kích cỡ</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="size" value="{{ old('size') }}" type="text"
                                                    class="form-control">
                                            </div>
                                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">màu sắc</label>
                                            <div class="col-lg-10 col-md-6 col-sm-12">
                                                <input name="color" value="{{ old('color') }}" type="text"
                                                    class="form-control">
                                            </div>
                                            <button type="submit" class="btn btn-primary">Thêm</button>
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
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">ID</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thương hiệu</th>
                    <th scope="col">Sửa</th>
                    <th scope="col">Xóa</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $counter = 1;
                @endphp
                @foreach ($Data['stores'] as $store)
                    <tr class="text-center">
                        <td>{{ $counter }}</td>
                        <td>
                            {{-- <a href="{{ route('store.show', ['id' => $store->id]) }}" class="text-capitalize text-decoration-none">
                                
                            </a> --}}
                            {{ $store->id }}
                        </td>
                        <td>{{ $store->name }}</td>
                        <td class="col-2">
                            <a href="http://localhost:3000/show/1">
                                <img src={{asset($store->file_path)}} alt="image" class="img-fluid">
                            </a>
                            
                        </td>
                        <td>{{ $store->category }}</td>
                        <td>{{ $store->quantity }}</td>
                        <td>{{ $store->brand}}</td>
                        <td>
                            <a class="btn btn-primary"
                                href="{{ route('admin.store.edit', ['id' => $store->id]) }}">
                                <i class="bi-pencil"></i>
                            </a>
                        </td>
                        <td>
                            <form action="{{ route('admin.store.delete', $store->id) }}" method="post">
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