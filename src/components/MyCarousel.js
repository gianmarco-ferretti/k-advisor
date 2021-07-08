import React from "react";
import { Carousel, Container } from "react-bootstrap";

export default function MyCarousel({ ristorante }) {
  const photoArr = ristorante.photos;

  return (
    <Container>
      <Carousel id="Mycarousel">
        {photoArr.map((k, i) => (
          <Carousel.Item key = {k}>
            <img
              className="d-block w-100 my-carousel-img"
              src={ristorante.photos[i]}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
