@extends('layouts.admin')
@section('title', $Data['title'])
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="container">
                <div class="row">
                    @if (session('ID_not_found'))
                        <script>
                            alert('{{ session('ID_not_found') }}');
                        </script>
                    @endif
                    <div class="col-11">
                        <span>Danh sách bình luận</span>
                    </div>
                    <div class="col-1">
                        <span>
                            <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create">
                                <i class="fa-solid fa-plus"></i>
                            </a>
                            <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Thêm bình luận mới</h5>
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
                                            <form method="POST" action="{{ route('admin.Comment.add') }}"
                                                enctype="multipart/form-data">
                                                @csrf <!-- bảo vệ sự tấn công CSRF -->
                                                <!-- add form controls to create product -->

                                                <label class="col-lg col-md-6 col-sm-12 col-form-label">Mã người dùng</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="user_id" value="{{ old('user_id') }}" type="text"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg col-md-6 col-sm-12 col-form-label">Mã sản phẩm</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="productId" value="{{ old('productId') }}" type="text"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Bình luận mới</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="comment" value="{{ old('comment') }}"
                                                        type="text" class="form-control">
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
                        <th scope="col">Mã người dùng</th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Bình luận</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $counter = 1;
                    @endphp
                    @foreach ($Data['Comments'] as $Comment)
                        <tr class="text-center">
                            <td>{{ $counter }}</td>
                            <td>{{ $Comment->id }}</td>
                            <td>{{ $Comment->user_id }}</td>
                            <td>{{ $Comment->product_id }}</td>
                            <td>{{ $Comment->comment }}</td>
                            <td>
                                <a class="btn btn-primary" href="{{ route('admin.Comment.edit', ['id' => $Comment->id]) }}">
                                    <i class="bi-pencil"></i>
                                </a>
                            </td>
                            <td>
                                <form action="{{ route('admin.Comment.delete', $Comment->id) }}" method="post">
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
