@extends('layouts.admin')
@section('title', $data['title'])
@section('content')
    <div class="card mb-4">
        <div class="card-header">
            Thay đổi thông tin người dùng
        </div>
        <div class="card-body">
            @if ($errors->any())
            <ul class="alert alert-danger list-unstyled">
                @foreach ($errors->all() as $error)
                    <li>- {{ $error }}</li>
                @endforeach
            </ul>
            @endif
            <form action="{{ route('userProfile.update', ['id'=> $data['info']->id]) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Tên người dùng</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="name" value="{{ $data['info']->name }}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="email" value="{{ $data['info']->email }}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Mật khẩu</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="password" value="{{ $data['info']->password }}" type="password" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Quyền hạn</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="role" value="{{ $data['info']->role }}" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">avatar</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input class="form-control" type="file" name="avatar">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Số dư</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="balance" value="{{ $data['info']->balance }}" type="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Số điện thoại</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="phone" value="{{ $data['info']->phone}}" type="number" class="form-control">
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="mb-3">
                    <label class="form-label">Địa chỉ</label>
                    <textarea class="form-control" name="address" rows="3">{{ $data['info']->address }}</textarea>
                </div>
                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    </div>
@endsection