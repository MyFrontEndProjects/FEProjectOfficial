@extends('layouts.app')
@section('beta')
<!-- Testimonial Start -->
<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="text-center">
            <h1 class="mb-5">Phản hồi từ Khách hàng</h1>
        </div>
        <div class="owl-carousel testimonial-carousel position-relative">
            <div class="testimonial-item text-center">
                <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="{{ asset('./img/testimonial-1.jpg') }}"
                    style="width: 80px; height: 80px;">
                <h5 class="mb-0">Jennifer Rodriguez</h5>
                <p>Giám Đốc Tiếp thị</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Chúng tôi đã mua chiếc Lexus LX570 từ trang web này và không thể hạnh phúc hơn.
                        Siêu xe
                        đẹp không gì so sánh, và dịch vụ khách hàng xuất sắc!</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="{{ asset('./img/testimonial-2.jpg') }}"
                    style="width: 80px; height: 80px;">
                <h5 class="mb-0">Michael Johnson</h5>
                <p>Chuyên gia Ô tô</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tôi đã mua Lexus LS500h từ đây và không thể tin nổi vào độ sang trọng và hiệu
                        suất của nó.
                        Một trải nghiệm mua sắm tuyệt vời!</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="{{ asset('./img/testimonial-3.jpg') }}"
                    style="width: 80px; height: 80px;">
                <h5 class="mb-0">Emily Clark</h5>
                <p>Chuyên viên Tài chính</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tôi đã tìm thấy chiếc Lexus RX350 tuyệt vời ở đây và đã được hỗ trợ tận tâm từ
                        nhân viên.
                        Chắc chắn sẽ quay lại!</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="bg-light rounded-circle p-2 mx-auto mb-3" src="{{ asset('./img/testimonial-4.jpg') }}"
                    style="width: 80px; height: 80px;">
                <h5 class="mb-0">John Smith</h5>
                <p>CEO Công ty</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Sự chọn lựa hoàn hảo cho ai đang tìm kiếm một chiếc siêu xe. Tôi đã mua một chiếc
                        Lexus RC F và nó vượt xa mong đợi của tôi. Cảm ơn bạn!</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Testimonial End -->
@endsection