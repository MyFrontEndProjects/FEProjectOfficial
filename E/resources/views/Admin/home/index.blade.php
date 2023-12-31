@extends('layouts.admin')
@section('title', $viewAdminLayout['title'])
@section('content')
    <section class="container my-5">
        <div class="card">
            <div class="card-header">
                <h1 class="display-4 text-primary">Bảng Quản Trị - Cửa Hàng Laptop</h1>
            </div>
            <div class="card-body">
                <p class="lead text-muted">Chào mừng bạn đến với Bảng Quản Trị cho trang web Cửa Hàng Laptop.</p>
                <p class="text-info">Bảng quản trị này được thiết kế để cung cấp cho bạn các công cụ và thông tin cần thiết
                    để quản lý cửa hàng laptop trực tuyến một cách hiệu quả.</p>
                <p class="text-info">Dưới đây là một số tính năng và chức năng quan trọng:</p>
                <ul>
                    <li>Quản Lý Sản Phẩm: Thêm, chỉnh sửa hoặc xóa sản phẩm laptop, bao gồm các chi tiết như thương hiệu,
                        thông số kỹ thuật và giá cả.</li>
                    <li>Quản Lý Người Dùng: Quản lý tài khoản người dùng, bao gồm khách hàng, nhân viên bán hàng và quản trị
                        viên. Bạn có thể thêm, cập nhật hoặc vô hiệu hóa tài khoản theo nhu cầu.</li>
                    <li>Quản Lý Bán Hàng và Đơn Hàng: Xem và xử lý các đơn hàng của khách hàng, theo dõi doanh số bán hàng
                        và quản lý hóa đơn. Bạn cũng có thể cập nhật trạng thái đơn hàng và tạo hóa đơn cho các đơn hàng đã
                        hoàn thành.</li>
                    <li>Phân Tích và Báo Cáo: Truy cập các báo cáo và phân tích chi tiết để theo dõi hiệu suất trang web.
                        Nhận thông tin về các sản phẩm bán chạy nhất, thông tin của khách hàng và nhiều thông tin
                        khác.</li>
                    <li>Quản Lý Nội Dung: Cập nhật nội dung trang web, bao gồm hình ảnh, mô tả và chương trình khuyến mãi.
                        Giữ cho thông tin sản phẩm và tài liệu tiếp thị của bạn luôn được cập nhật.</li>
                </ul>
                <p class="text-warning">Lưu Ý: Quyền truy cập vào Bảng Quản Trị chỉ được cấp cho các quản trị viên được ủy
                    quyền. Nếu bạn cố gắng truy cập bằng tài khoản người dùng thông thường, bạn sẽ không có quyền truy cập
                    vào trang này.</p>
                <p class="text-danger">Nếu bạn cho rằng đây là một lỗi hoặc cần sự hỗ trợ, vui lòng liên hệ với đội hỗ trợ
                    của chúng tôi để được giúp đỡ thêm.</p>
            </div>
            <div class="card-footer">
                <p class="text-muted">Cập Nhật Lần Cuối: 23 Tháng 9, 2023</p>
            </div>


        </div>
    </section>



@endsection
