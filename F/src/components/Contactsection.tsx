import React from 'react';
import contactImage from './img/contact-1.webp';
function Contactsection() {
  return (
    <>

      <section className="section bg-light mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase">Liên Hệ</h6>
              <h1 className="mb-4"><span className="text-primary">Dream Laptop</span> - Kết Nối Với Chúng Tôi</h1>
              <p className="mb-4">
                Dream Laptop luôn sẵn sàng hỗ trợ bạn với hơn 6 năm kinh nghiệm trong lĩnh vực máy tính xách tay. Chúng tôi cam kết đem đến sự tin cậy và chất lượng cho mọi khách hàng.
              </p>
              <p className="mb-4">
                Đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ về sản phẩm hoặc mọi thông tin bạn cần. Đội ngũ chuyên gia của chúng tôi luôn sẵn lòng đáp ứng mọi yêu cầu của bạn.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="./img/contact-1.webp" alt="Dream Laptop Contact" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark py-5" style={{ borderBottomLeftRadius: '60px', borderBottomRightRadius: '60px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="text-light mb-4">Liên Hệ</h4>
              <p className="text-light mb-2"><i className="fa fa-map-marker-alt me-3" />Địa chỉ: Số 123, Đường Nguyễn Văn Linh, Phường Tân Thuận Đông, Quận 12, Công Viên Phần Mềm Quang Trung, TP.HCM</p>
              <p className="text-light mb-2"><i className="fa fa-phone-alt me-3" />+091 091 9999</p>
              <p className="text-light mb-2"><i className="fa fa-envelope me-3" />dreamlaptop@gmail.com</p>
              <div className="d-flex pt-2">
                <a href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-twitter" /></a>
                <a href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-facebook-f" /></a>
                <a href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-youtube" /></a>
                <a href="#a" className="btn btn-outline-light btn-social"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-light mb-4">Dream Laptop - Kết Nối Với Sự Hoàn Hảo</h4>
              <p className="text-light">
                Chúng tôi rất hân hạnh được phục vụ bạn và đồng hành trong hành trình tìm kiếm chiếc laptop hoàn hảo của bạn. Tại Dream Laptop, chúng tôi cam kết cung cấp sự đa dạng, chất lượng và dịch vụ chuyên nghiệp nhất trong lĩnh vực laptop. Chúng tôi hiểu rằng máy tính xách tay không chỉ là một thiết bị, mà còn là công cụ quan trọng giúp bạn thực hiện những ước mơ và thành công trong cuộc sống.
              </p>
              <p className="text-light">
                Với hơn 6 năm kinh nghiệm trong ngành công nghiệp laptop, chúng tôi đã xây dựng một đội ngũ chuyên gia có kiến thức sâu rộng về laptop và luôn sẵn sàng giúp đỡ bạn trong mọi tình huống. Chúng tôi cam kết đem đến cho bạn những sản phẩm và dịch vụ tốt nhất để bạn có thể tận hưởng trải nghiệm mua sắm tuyệt vời.
              </p>
              <p className="text-light">
                Đừng ngần ngại liên hệ với chúng tôi bất kỳ lúc nào. Chúng tôi luôn sẵn lòng lắng nghe bạn, giải đáp mọi câu hỏi và giúp bạn chọn lựa sản phẩm phù hợp nhất. Hãy để Dream Laptop đồng hành cùng bạn trong cuộc hành trình với laptop của bạn để đạt được sự hoàn hảo mà bạn mong muốn.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="section bg-light py-2">
        <div className="container">
          <h6 className="text-primary text-uppercase">Thông Tin Chi Nhánh</h6>
          <h1 className="mb-4"><span className="text-primary">Dream Laptop</span> - Gần Bạn Ở Khắp Mọi Nơi</h1>

          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4">
                <h4 className="text-primary">Chi Nhánh Hà Nội</h4>
                <p>
                  <strong>Địa chỉ:</strong> Số 123, Đường Láng, Quận Đống Đa, Hà Nội
                </p>
                <p>
                  <strong>Thời Gian Hoạt Động:</strong> 6:00 AM - 9:00 PM
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-primary">Chi Nhánh Hồ Chí Minh</h4>
                <p>
                  <strong>Địa chỉ:</strong> Số 456, Đường Nguyễn Du, Quận 1, TP.HCM
                </p>
                <p>
                  <strong>Thời Gian Hoạt Động:</strong> 7:00 AM - 10:00 PM
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-primary">Chi Nhánh Đà Nẵng</h4>
                <p>
                  <strong>Địa chỉ:</strong> Số 789, Đường Hải Phòng, Quận Thanh Khê, Đà Nẵng
                </p>
                <p>
                  <strong>Thời Gian Hoạt Động:</strong> 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-4">
                <h4 className="text-primary">Chi Nhánh Hải Phòng</h4>
                <p>
                  <strong>Địa chỉ:</strong> Số 101, Đường Lê Lợi, Quận Hồng Bàng, Hải Phòng
                </p>
                <p>
                  <strong>Thời Gian Hoạt Động:</strong> 7:30 AM - 9:30 PM
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-primary">Chi Nhánh Cần Thơ</h4>
                <p>
                  <strong>Địa chỉ:</strong> Số 222, Đường Trần Hưng Đạo, Quận Ninh Kiều, Cần Thơ
                </p>
                <p>
                  <strong>Thời Gian Hoạt Động:</strong> 6:30 AM - 10:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Contactsection;