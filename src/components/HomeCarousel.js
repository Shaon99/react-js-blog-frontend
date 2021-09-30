import React from 'react';
import { Carousel } from 'react-bootstrap';
import Travel from "./bora.jpg"
import Travel1 from "./p.jpg"
import Travel2 from "./travel1.jpg"


export default function HomeCarousel() {
    return (
        <div>
            <Carousel controls={false} fade={true}>
  <Carousel.Item interval={2000} >
    <img  height={500}
      className="d-block w-100"
      src={Travel}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000} >
    <img  height={500}
      className="d-block w-100"
      src={Travel1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img  height={500}
      className="d-block w-100"
      src={Travel2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
