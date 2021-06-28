import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function MyCarousel({ index }) {
  const ristoranti = useSelector((state) => state.ristoranti);
  const photoarray = ristoranti[index].photos;
  console.log(photoarray);
  return (
    <Container>
      <Carousel id="Mycarousel">
        {photoarray.map((k, i) => (
          <Carousel.Item>
            <img
              id="carouselimage"
              className="d-block w-100"
              src={ristoranti[index].photos[i]}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
