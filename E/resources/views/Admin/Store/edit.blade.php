@extends('layouts.admin')
@section('title', $storeData['title'])
@section('content')
    <div class="card mb-4">
        <div class="card-header">
            Edit Store
        </div>
        <div class="card-body">
            @if ($errors->any())
            <ul class="alert alert-danger list-unstyled">
                @foreach ($errors->all() as $error)
                    <li>- {{ $error }}</li>
                @endforeach
            </ul>
            @endif
            <form action="{{ route('admin.store.update', ['id'=> $storeData['store']->id]) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Tên Sản Phẩm</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="name" value="{{ $storeData['store']->name }}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Loại:</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="category" value="{{ $storeData['store']->category }}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Giá</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="price" value="{{ $storeData['store']->price }}" type="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Hình ảnh</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input class="form-control" type="file" name="file_path">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Số lượng</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="quantity" value="{{ $storeData['store']->quantity }}" type="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Màu sắc</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="color" value="{{ $storeData['store']->color}}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Hãng</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="brand" value="{{ $storeData['store']->brand}}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Kích cỡ</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="size" value="{{ $storeData['store']->size}}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Mô tả</label>
                    <textarea class="form-control" name="description" rows="3">{{ $storeData['store']->description }}</textarea>
                </div>
                <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </div>
    </div>
@endsection