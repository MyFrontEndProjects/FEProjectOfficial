@extends('layouts.app')
@section('sect5')
<div class="container" style="margin-top: 80px">
    <div class="row text-wrap">
        <span class="fs2">
            Thanh toán thành công!!!
        </span>
        <span class="fs-">
            <div class="alert alert-success" role="alert">
                Congratulations, purchase completed. Order number is 
                <b>#{{ $viewPurchase['order']->id }}</b>
                </div>
        </span>
    </div>
</div>