@extends('layouts.app')
@section('sect5')
    <h1>Tìm thấy {{ count($product) }} sản phẩm</h1>
    @foreach ($product as $Info)
        <div class="row ms-2 g-0 mb">
            <div class="col-md-4">
                <img src="{{ route('store.showImage', ['filename' => $Info['image']]) }}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body text-wrap pt-3">
                    <h5 class="card-title ps-2">
                        {{ $Info->name }}
                    </h5>
                    <div class="bg-light ps-2"
                        style="        font-weight: 900;
            font-size: 1.2em;
            line-height: 1.5;">
                        {{ $Info->price }} $
                    </div>
                    <p class="card-text ps-2">{{ $Info->description }}</p>
                    <div class="card-text">
                        <form action="{{ route('cart.add', ['id' => $Info->id]) }}" method="post" class="container">
                            <div class="row row-cols-1 row-cols-md-1 g-3">
                                @csrf

                                <div class="col" style="width: 150px">
                                    <label for="quantity">số lượng</label>
                                    <div class="input-group">
                                        <div class="input-group-text decrease-quantity">-</div>
                                        <input type="number" name="quantity" min="1" max="20"
                                            class="form-control quantity-input text-center" value="1"
                                            style="width: 50px">
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
                                <div class="col ">
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
    @endforeach
@endsection
