import React from 'react';

function AboutUs() {
    return (
        <>
            <section className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                                <img className="position-absolute img-fluid w-100 h-100" src="./img/aboutus-1.webp" style={{ objectFit: 'cover' }} alt="About Us" />
                                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, .08)' }}>
                                    <h1 className="display-4 text-white mb-0">6 <span className="fs-4">Năm</span></h1>
                                    <h4 className="text-white">Kinh Nghiệm</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase">Giới thiệu</h6>
                            <h1 className="mb-4"><span className="text-primary">Dream Laptop</span> - 6 Năm Kinh Nghiệm</h1>
                            <p className="mb-4">
                                Dream Laptop là nơi bạn có thể tin tưởng để mua và chăm sóc chiếc laptop của mình. Chúng tôi đã có 6 năm kinh nghiệm trong lĩnh vực này và cam kết cung cấp cho bạn những sản phẩm và dịch vụ tốt nhất.
                            </p>
                            <div className="row g-4 mb-3 pb-3">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">01</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Chất Lượng và Hiệu Năng</h6>
                                            <span>Chúng tôi cam kết cung cấp các laptop chính hãng với hiệu năng mạnh mẽ và độ tin cậy cao.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">02</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Ưu Đãi và Giảm Giá</h6>
                                            <span>Chúng tôi luôn có giá tốt và ưu đãi hấp dẫn cho khách hàng của mình.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">06</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Hỗ Trợ Chuyên Nghiệp</h6>
                                            <span>Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng để giúp đỡ bạn với mọi thắc mắc và vấn đề.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#a" className="btn btn-primary py-3 px-5">Tìm hiểu thêm<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase">Sự Huyền Thoại</h6>
                            <h1 className="mb-4"><span className="text-primary">Dream Laptop</span> - Kinh Nghiệm 6 Năm Trong Ngành</h1>
                            <p className="mb-4">
                                Dream Laptop, với hơn 6 năm kinh nghiệm, đã tạo dấu ấn mạnh mẽ trong lĩnh vực máy tính xách tay. Từ sự thành lập vào năm 2017, Dream Laptop đã trở thành biểu tượng của sự tin cậy và chất lượng.
                            </p>
                            <p className="mb-4">
                                Hành trình huyền thoại của Dream Laptop bắt đầu với sự tâm huyết của những chuyên gia hàng đầu trong ngành công nghiệp máy tính. Chúng tôi đã xây dựng sản phẩm với tầm nhìn tạo ra những chiếc laptop vượt trội về hiệu suất và thương hiệu mạnh mẽ.
                            </p>
                            <p className="mb-4">
                                Dream Laptop luôn đặt sự sáng tạo và phát triển liên tục vào trung tâm hoạt động. Chúng tôi cam kết mang đến cho khách hàng những công nghệ tiên tiến và sản phẩm chất lượng hàng đầu, đã giúp chúng tôi đoạt nhiều giải thưởng và niềm tin từ khách hàng trong suốt hành trình của mình.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src="./img/aboutus-2.webp" alt="Dream Laptop History" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}

export default AboutUs;
