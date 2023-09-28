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
                                            <h5 class="modal-title" id="exampleModalLabel">Thêm đánh giá mới</h5>
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
                                            <form method="POST" action="{{ route('admin.Review.add') }}"
                                                enctype="multipart/form-data">
                                                @csrf <!-- bảo vệ sự tấn công CSRF -->
                                                <!-- add form controls to create product -->

                                                <label class="col-lg col-md-6 col-sm-12 col-form-label">Mã người dùng</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="user_id" value="{{ old('user_id') }}" type="text"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg col-md-6 col-sm-12 col-form-label">số điện thoại</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="phone" value="{{ old('phone') }}" type="number"
                                                        class="form-control">
                                                </div>
                                                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Đánh giá mới</label>
                                                <div class="col-lg-10 col-md-6 col-sm-12">
                                                    <input name="review" value="{{ old('review') }}"
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
                        <th scope="col">Mã số điện thoại</th>
                        <th scope="col">Đánh giá</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $counter = 1;
                    @endphp
                    @foreach ($Data['Reviews'] as $review)
                        <tr class="text-center">
                            <td>{{ $counter }}</td>
                            <td>{{ $review->id }}</td>
                            <td>{{ $review->user_id }}</td>
                            <td>{{ $review->phone }}</td>
                            <td>{{ $review->review }}</td>
                            <td>
                                <a class="btn btn-primary" href="{{ route('admin.Review.edit', ['id' => $review->id]) }}">
                                    <i class="bi-pencil"></i>
                                </a>
                            </td>
                            <td>
                                <form action="{{ route('admin.Review.delete', $review->id) }}" method="post">
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
