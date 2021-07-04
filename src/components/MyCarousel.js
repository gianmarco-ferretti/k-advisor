import React from "react";
import { Carousel, Container } from "react-bootstrap";

export default function MyCarousel({ ristorante }) {
  
  const photoarray = ristorante.photos;

  return (
    <Container>
      <Carousel id="Mycarousel">
        {photoarray.map((k, i) => (
          <Carousel.Item key = {k}>
            <img
              id="carouselimage"
              className="d-block w-100"
              src={ristorante.photos[i]}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
