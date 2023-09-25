import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "components/Card";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

const CardSession = () => {
  return (
    <div className="container py-5 ">
      {/* lg screen */}
      <div className="d-none d-lg-block">
        <Carousel>
          <Carousel.Item>
            {/* Caro 1 */}
            <div className="row row-cols-lg-4">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-1.webp"
                  title="Predator Trison 17X"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
 
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-2.webp"
                  title="Predator Triton 14"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>

              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-3.webp"
                  title="Predator Trison 16"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>

              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-4.webp"
                  title="Predator Helios NEO 16"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>

           {/* Caro 5 */}
          <Carousel.Item>
            <div className="row row-cols-lg-4">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-5.webp"
                  title="Nitro 16 AMD"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-6.webp"
                  title="Nitro 16 Intel"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-7.webp"
                  title="Nitro 17 AMD"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-8.webp"
                  title="Nitro 17 Intel"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>

      {/* sm screen */}
      <div className="d-none d-sm-block d-lg-none">
        <Carousel>
          <Carousel.Item>
            <div className="row row-cols-sm-2">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-4.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-4.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row row-cols-sm-2">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-4.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-4.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
      {/* normal screen */}
      <div className="d-block d-sm-none">
        <Carousel>
          <Carousel.Item>
            <div className="row row-cols-1">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-4.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row row-cols-1">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-1.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row row-cols-1">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-2.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row row-cols-1">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-7.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row row-cols-1">
              <div className="col">
                <Card
                  titleUrl="/"
                  imageUrl="./img/caro-8.webp"
                  title="Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  buttonText="Button 2"
                  pageUrl="/main2"
                />
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
};

export default CardSession;
