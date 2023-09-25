@extends('layouts.app')
@section('sect1')
    <div class="row ms-2 g-0">
        <div class="col-md-5">
            <img src="{{ route('store.showImage', ['filename' => $storeData['image']]) }}" class="img-fluid rounded-start">
        </div>
        <div class="col-md-7">
            <div class="container">
                <div class="card-body text-wrap pt-3">
                    <div class="row">
                        <h1 class="card-title ps-2 text-capitalize">
                            {{ $storeData['storeItem']->name }}
                        </h1>
                    </div>
                    <div class="row fs-3">
                        <div class="col-4 col-lg-2">
                            Giá
                        </div>
                        <div class="col">
                            <div class="ps-2 text-capitalize ">
                                <strong>
                                ${{ $storeData['storeItem']->price }}

                                </strong>
                            </div>
                        </div>
                    </div>
                    <div class="row fs-4">
                        <div class="col-4 col-lg-2">
                            Loại
                        </div>
                        <div class="col">
                            <div class="ps-2 text-capitalize">
                                {{ $storeData['storeItem']->category }}
                            </div>
                        </div>
                    </div>
                    <div class="row fs-4">
                        <div class="col-4 col-lg-2">
                            Tình trạng
                        </div>
                        <div class="col">
                            <div class="ps-2 text-capitalize">
                                {{ $storeData['storeItem']->condition }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 fs-4">Mô tả</div>
                        <div class="col">
                            <span class="card-text">{{ $storeData['storeItem']->description }}</span>

                        </div>
                    </div>
                    
                    <form action="{{ route('cart.add', ['id' => $storeData['storeItem']->id]) }}" method="post">
                        @csrf
                        <div class="row pt-5">
                            <div class="col-4 col-lg-2">
                                Số lượng
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <div class="input-group-text decrease-quantity">-</div>
                                    <input type="number" name="quantity" min="1" max="20" id="quantity"
                                        class="form-control quantity-input text-center" value="1" style="width: 50px">
                                    <div class="input-group-text increase-quantity">+</div>
                                </div>
                            </div>
                            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                            <script>
                                $(document).ready(function() {
                                    // Bắt sự kiện khi nút "-" được nhấn
                                    $(".decrease-quantity").click(function() {
                                        var input = $(this).siblings(".quantity-input");
                                        var currentValue = parseInt(input.val(), 10);

                                        if (currentValue > 1) {
                                            input.val(currentValue - 1);
                                        }
                                    });

                                    // Bắt sự kiện khi nút "+" được nhấn
                                    $(".increase-quantity").click(function() {
                                        var input = $(this).siblings(".quantity-input");
                                        var currentValue = parseInt(input.val(), 10);

                                        if (currentValue < 20) {
                                            input.val(currentValue + 1);
                                        }
                                    });
                                });
                            </script>
                            <div class="col">
                                <button class="btn btn-secondary d-flex me-2" type="submit">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>

    </div>
    </div>
@endsection
