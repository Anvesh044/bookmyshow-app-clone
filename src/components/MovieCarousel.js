import React from "react";
import { Carousel } from "react-bootstrap";

const MovieCarousel = () => {
  return (
    <Carousel controls={true} indicators={true} interval={3000} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/kantara1.jpg"
          alt="Kantara"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Kantara</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/empuran1.jpg"
          alt="Empuraan"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Empuraan</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/leo.jpg"
          alt="Leo"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Leo</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/kgf.jpg"
          alt="KGF Chapter 2"
          style={{ height: "580px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>KGF Chapter 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
