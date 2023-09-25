@extends('layouts.app')
@section('beta')
<!-- About Start -->
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6 pt-4" style="min-height: 400px;">
                <div class="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                    <img class="position-absolute img-fluid w-100 h-100" src="{{asset('img/about.jpg')}}" style="object-fit: cover;"
                        alt="">
                    <div class="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                        style="background: rgba(0, 0, 0, .08);">
                        <h1 class="display-4 text-white mb-0">15 <span class="fs-4">Years</span></h1>
                        <h4 class="text-white">Experience</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <h6 class="text-primary text-uppercase">Giới thiệu</h6>
                <h1 class="mb-4"><span class="text-primary">LexuZ</span> - Nơi tốt nhất cho dịch vụ chăm sóc xe của bạn</h1>
                <p class="mb-4">LexuZ là nơi bạn có thể tin tưởng để chăm sóc chiếc xe của mình. Chúng tôi cam kết cung cấp
                    các dịch vụ chất lượng cao và đội ngũ chuyên nghiệp và giàu kinh nghiệm sẽ đảm bảo rằng chiếc xe của bạn
                    luôn trong tình trạng tốt nhất.</p>
                <div class="row g-4 mb-3 pb-3">
                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <div class="d-flex">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                style="width: 45px; height: 45px;">
                                <span class="fw-bold text-secondary">01</span>
                            </div>
                            <div class="ps-3">
                                <h6>Chuyên nghiệp và Kỹ thuật viên lành nghề</h6>
                                <span>Đội ngũ của chúng tôi luôn sẵn sàng để phục vụ bạn một cách chuyên nghiệp</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                        <div class="d-flex">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                style="width: 45px; height: 45px;">
                                <span class="fw-bold text-secondary">02</span>
                            </div>
                            <div class="ps-3">
                                <h6>Trung tâm dịch vụ chất lượng</h6>
                                <span>Chúng tôi cam kết cung cấp dịch vụ chất lượng hàng đầu</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                        <div class="d-flex">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                style="width: 45px; height: 45px;">
                                <span class="fw-bold text-secondary">03</span>
                            </div>
                            <div class="ps-3">
                                <h6>Đội ngũ làm việc đã đoạt giải thưởng</h6>
                                <span>Chúng tôi tự hào về đội ngũ làm việc xuất sắc của mình đã đạt nhiều giải thưởng trong những năm qua</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" class="btn btn-primary py-3 px-5">Tìm hiểu thêm<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
            
        </div>
        <section class="section bg-light mt-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h6 class="text-primary text-uppercase">Sự Huyền Thoại</h6>
                        <h1 class="mb-4"><span class="text-primary">LexuZ</span> - Tạo Dấu Ấn Trong Lịch Sử Ô Tô</h1>
                        <p class="mb-4">
                            Hãng phân phối xe LexuZ, với hơn 30 năm lịch sử, đã ghi dấu ấn mạnh mẽ trong ngành công nghiệp ô tô. Từ sự ra đời vào năm 1989, LexuZ đã trở thành biểu tượng của sự đẳng cấp và phong cách.
                        </p>
                        <p class="mb-4">
                            Hành trình huyền thoại của LexuZ bắt đầu với sự tưởng tượng của Giáo sư Moho Darbet, một danh nhân trong lĩnh vực công nghệ và kỹ thuật. LexuZ được xây dựng với tầm nhìn tạo ra những chiếc xe vượt trội về hiệu suất và đẳng cấp.
                        </p>
                        <p class="mb-4">
                            LexuZ luôn chú trọng vào sự sáng tạo và phát triển liên tục. Chúng tôi cam kết mang đến khách hàng những công nghệ tiên tiến và tiện nghi hàng đầu, đã giúp chúng tôi đoạt nhiều giải thưởng quốc tế trong suốt hành trình phấn đấu.
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <img src="{{asset('./img/founder.jpg')}}" alt="LexuZ History" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="bg-light py-5 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h6 class="text-primary text-uppercase">Chúng tôi</h6>
                        <h1 class="mb-4">3 Tiêu Chí Chúng Tôi Tự Hào</h1>
                    </div>
                </div>
                <div class="row g-4 mb-3 pb-3">
                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <div class="d-flex">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                style="width: 45px; height: 45px;">
                                <span class="fw-bold text-secondary">01</span>
                            </div>
                            <div class="ps-3">
                                <h6>Chuyên nghiệp và Kỹ thuật viên lành nghề</h6>
                                <p>Tận hưởng sự an tâm với dịch vụ của chúng tôi là điều mà bạn có thể mong đợi tại LexuZ. Tiêu chí hàng đầu của chúng tôi là "Chuyên nghiệp và Kỹ thuật viên lành nghề." Điều này đồng nghĩa với việc bạn có thể tin tưởng vào sự chuyên nghiệp và kỹ năng tuyệt vời của đội ngũ chuyên gia của chúng tôi.

                                    Chúng tôi tự hào về việc tuyển dụng và đào tạo các kỹ thuật viên hàng đầu trong ngành công nghiệp ô tô. Tất cả các thành viên của đội ngũ chúng tôi đều được chứng nhận và có kinh nghiệm rộng lớn trong việc sửa chữa và bảo dưỡng các loại xe hơi. Chúng tôi luôn cập nhật kiến thức và kỹ thuật mới nhất để đảm bảo rằng chúng tôi luôn nắm bắt được những thay đổi trong ngành và có thể cung cấp dịch vụ tốt nhất cho bạn.
                                    
                                    Khách hàng của chúng tôi luôn được đối xử với sự tôn trọng và thái độ chuyên nghiệp từ khi họ đặt chân vào cửa hàng của chúng tôi. Chúng tôi lắng nghe mọi yêu cầu và nắm bắt mọi vấn đề một cách tỉ mỉ để có thể đưa ra giải pháp tốt nhất. Chất lượng dịch vụ là ưu tiên hàng đầu của chúng tôi, và chúng tôi cam kết luôn mang đến sự hài lòng cho khách hàng.
                                    
                                    Tại LexuZ, sự kỹ thuật viên lành nghề của chúng tôi không chỉ đảm bảo xe của bạn được sửa chữa một cách tốt nhất mà còn giúp bạn hiểu rõ về tình trạng của chiếc xe của mình. Chúng tôi sẽ cung cấp cho bạn thông tin chi tiết về các vấn đề cần được giải quyết và giúp bạn đưa ra quyết định thông minh về việc bảo dưỡng và sửa chữa.
                                    
                                    Chúng tôi luôn tự tin rằng dịch vụ chuyên nghiệp và kỹ thuật viên lành nghề của chúng tôi sẽ đánh bại mọi thách thức trong việc duy trì và bảo dưỡng chiếc xe của bạn. Hãy để chúng tôi chăm sóc chiếc xe của bạn, và bạn sẽ trải nghiệm sự an tâm và hài lòng mỗi khi lên đường. Chào mừng bạn đến với LexuZ - nơi sự chuyên nghiệp và kỹ thuật viên lành nghề là sứ mệnh hàng đầu của chúng tôi.</p>
                            
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                        <div class="d-flex">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                style="width: 45px; height: 45px;">
                                <span class="fw-bold text-secondary">02</span>
                            </div>
                            <div class="ps-3">
                                <h6>Trung tâm dịch vụ chất lượng</h6>
                                <p>LexuZ luôn tự hào về việc đặt chất lượng lên hàng đầu và cam kết cung cấp dịch vụ chất lượng hàng đầu cho tất cả các khách hàng. Với một trung tâm dịch vụ trang bị hiện đại và công nghệ tiên tiến, chúng tôi đảm bảo rằng mọi công việc được thực hiện với sự tỉ mỉ và chuyên nghiệp.

                                    Chúng tôi sử dụng các linh kiện và phụ tùng chất lượng, đảm bảo rằng xe của bạn sẽ luôn hoạt động ổn định và an toàn. Bất kể là việc bảo dưỡng định kỳ, sửa chữa lớn hay bất kỳ dịch vụ nào khác, bạn có thể tin tưởng vào chúng tôi để mang lại cho chiếc xe của bạn sự chăm sóc tốt nhất.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                        <div class="d-flex">
                            <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                style="width: 45px; height: 45px;">
                                <span class="fw-bold text-secondary">03</span>
                            </div>
                            <div class="ps-3">
                                <h6>Đội ngũ làm việc đã đoạt giải thưởng</h6>
                                <p>LexuZ tự hào về đội ngũ làm việc xuất sắc của mình, đã đoạt nhiều giải thưởng trong ngành công nghiệp ô tô. Những người thợ lành nghề của chúng tôi đã được công nhận và vinh danh với các giải thưởng về chất lượng dịch vụ và thành tích xuất sắc trong lĩnh vực này.

                                    Chúng tôi luôn khuyến khích sự sáng tạo và cam kết đào tạo và phát triển liên tục cho đội ngũ của mình. Điều này giúp chúng tôi duy trì và nâng cao chất lượng dịch vụ để đáp ứng những yêu cầu khắt khe nhất của khách hàng.
                                    
                                    Khi đến với LexuZ, bạn sẽ được phục vụ bởi một đội ngũ chuyên nghiệp, có kỹ năng cao và đoạt giải thưởng, đảm bảo rằng bạn luôn được đối xử với sự chuyên nghiệp và hiệu suất tốt nhất trong mọi lĩnh vực của dịch vụ ô tô. Chúng tôi tự hào về đội ngũ làm việc của mình và sẽ không ngừng nỗ lực để đạt được sự xuất sắc trong mọi dự án .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</div>
<!-- About End -->
@endsection