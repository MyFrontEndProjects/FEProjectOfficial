@extends('layouts.admin')
@section('title', $data['title'])
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="container">
                <div class="row">
                    <div class="col-11">
                        <span>Danh sách Người dùng</span>
                    </div>
                    <div class="col-1">
                        <span>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#createStoreModal">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            <div class="modal fade" id="createStoreModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Tạo tài khoản</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body container">
                                            @if ($errors->any())
                                                <ul class="alert alert-danger list-unstyled">
                                                    @foreach ($errors->all() as $error)
                                                        <li>- {{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            @endif
                                            <form method="POST" action="{{ route('createUser') }}"
                                                enctype="multipart/form-data">
                                                @csrf <!-- bảo vệ sự tấn công CSRF -->
                                                <!-- add form controls to create product -->
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Tên</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="name" value="{{ old('name') }}" type="text"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="email" value="{{ old('email') }}" type="email"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Password</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="password" value="{{ old('password') }}" type="password"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Role</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="role" value="{{ old('role') }}" type="role"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Tiền</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="balance" value="{{ old('balance') }}" type="number"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Số điện
                                                    thoại</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="phone" value="{{ old('phone') }}" type="number"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Địa chỉ</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="address" value="{{ old('address') }}" type="text"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">avatar</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input class="form-control" type="file" name="avatar">
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
                        <th scope="col">Avatar</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quyền hạn</th>
                        <th scope="col">Xem</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $counter = 1;
                    @endphp
                    @foreach ($data['users'] as $user)
                        <tr>
                            <td>{{ $counter }}</td>
                            <td>
                                {{-- <a href="{{ route('store.show', ['id' => $user->id]) }}" class="text-capitalize text-decoration-none">
                                    {{ $user->id }}
                                </a> --}}
                                {{ $user->id }}
                            </td>
                            <td>
                                <img src={{ asset($user->avatar) }} alt="avatar" class="img-fluid rounded"
                                    style="height: 100px" width="100px">
                            </td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>

                            <td>{{ $user->role }}</td>
                            <td>
                                <form action="{{ route('userProfile', $user->id) }}" method="get">
                                    @csrf
                                    <button class="btn btn-primary">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                </form>
                            </td>
                            <td>
                                <form action="{{ route('userProfile.edit', $user->id) }}" method="get">
                                    @csrf
                                    <button class="btn btn-primary">
                                        <i class="bi bi-pen"></i>
                                    </button>
                                </form>
                            </td>

                            <td>
                                <form action="{{ route('admin.user.delete', $user->id) }}" method="post">
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
