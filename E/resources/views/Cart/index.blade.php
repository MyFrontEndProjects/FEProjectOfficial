@extends('layouts.app')
@section('title',  $showCart['title'])
@section('sect8')

        <div class="card ">
            <div class="card-header">
                Products in cart
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th class="col">Name</th>
                            <th class="col">Price</th>
                            <th class="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($showCart['stores'] as $store)
                            <tr>
                                <td>{{ $store->name }}</td>
                                <td>{{ $store->price }}</td>
                                <td>{{ session('stores')[$store->id] }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="row">
                    <div class="text-end">
                        <a class="btn btn-outline-secondary mb-2">
                            <b>
                                Total to pay: ${{ $showCart['total'] }}
                            </b>
                        </a>
                        @if (count($showCart['stores']) > 0)
                            <a href="{{ route('cart.purchase') }}" class="btn bg-primary text-white mb-2">
                                thanh toán
                            </a>
                            <a href="{{ route('cart.delete') }}">
                                <button class="btn btn-danger mb-2">
                                    Xóa
                                </button>
                            </a>
                        @endif

                    </div>
                </div>
            </div>
        </div>
  
@endsection
