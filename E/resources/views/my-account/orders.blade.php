@extends('layouts.app')
@section('title', $myOrder['title'])
@section('subtitle', $myOrder['subtitle'])
@section('sect5')
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h2>Danh sách hóa đơn</h2>
            </div>
        </div>
        @php
            // Đảo ngược danh sách đơn hàng
            $reversedOrders = $myOrder['orders']->reverse();
        @endphp
        @forelse ($reversedOrders as $order)
            <div class="row text-wrap">
                <div class="fs2">
                    <header>
                        Hoá đơn số #{{ $order->getId() }}
                    </header>
                    <div class="fs-3">
                        <b>Date:</b> {{ $order->getCreatedAt() }}<br />
                        <b>Total:</b> ${{ $order->getTotal() }}<br />
                        <table class="table table-bordered table-striped text-center mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">ID sản phẩm</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($order->getItems() as $item)
                                    <tr>
                                        <td>{{ $item->getId() }}</td>
                                        <td>
                                            <a class="link-success"
                                                href="{{ route('store.show', ['id' => $item->getProduct()->id]) }}">
                                                {{ $item->getProduct()->name }}
                                            </a>
                                        </td>
                                        <td>${{ $item->price }}</td>
                                        <td>{{ $item->quantity }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        @empty
            <div class="alert alert-danger" role="alert">
                Seems to be that you have not purchased anything in our store =(.
            </div>
        @endforelse
    </div>
@endsection
