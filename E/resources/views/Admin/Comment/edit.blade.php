@extends('layouts.admin')
@section('title', $data['title'])
@section('content')
    <div class="card mb-4">
        <div class="card-header">
            Chỉnh sửa bình luận
        </div>
        <div class="card-body">
            @if ($errors->any())
            <ul class="alert alert-danger list-unstyled">
                @foreach ($errors->all() as $error)
                    <li>- {{ $error }}</li>
                @endforeach
            </ul>
            @endif
            <form action="{{ route('admin.Comment.update', ['id'=> $data['Comment']->id]) }}" method="post" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="row row-cols-1 row-cols-sm-2">
                    <div class="col">
                        <div class="mb-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Mã Sản Phẩm</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input name="productId" value="{{ $data['Comment']->product_id }}" type="text" class="form-control">
                            </div>
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Bình luận</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <textarea name="comment" rows="3" value="{{ $data['Comment']->product_id }}" type="text" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
        
                <button onclick="return confirm('Bạn có chắc chắn muốn thay đổi?');" class="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    </div>
@endsection