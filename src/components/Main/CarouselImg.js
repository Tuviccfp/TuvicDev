import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const CarouselConfig = styled.div`
    display: flex;
    justify-content: center;
    width: 540px; 
    height: 700px;
    position: relative;
    left: 220px;
    
    #img-carousel {
        width: 540px;
        height: 680px;
        border-radius: 5px;
        margin-top: 14px;
    }
`
export default function CarouselImg() {
  return (
    <CarouselConfig>
      <Carousel>
        <Carousel.Item>
          <img
            id="img-carousel"
            className="d-block"
            src="VictorDev.png"
            alt="Chip eletrônico com led"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="img-carousel"
            className="d-block"
            src="kevin-ku-w7ZyuGYNpRQ-unsplash.jpg"
            alt="Chip eletrônico com led"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="img-carousel"
            className="d-block"
            src="pakata-goh-RDolnHtjVCY-unsplash.jpg"
            alt="Globo terrestre com luzes douradas formando uma rede neural."
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="img-carousel"
            className="d-block"
            src="fotis-fotopoulos-6sAl6aQ4OWI-unsplash (1).jpg"
            alt="Globo terrestre com luzes douradas formando uma rede neural."
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="img-carousel"
            className="d-block"
            src="danilo-alvesd-NPhdQeZ-hyU-unsplash.jpg"
            alt="StarTroop (Soldado do Star Wars)"
          />
        </Carousel.Item>
      </Carousel>
    </CarouselConfig>
  );
}
