import React, { Component } from 'react';
import './Header.css';
import { Carousel } from 'react-bootstrap';
import CarouselImage1 from './CarouselImages/1.jpg';
import CarouselImage2 from './CarouselImages/2.jpg';
import CarouselImage3 from './CarouselImages/3.jpg';
import CarouselImage4 from './CarouselImages/4.jpg';
import CarouselImage5 from './CarouselImages/5.jpg';

class ImageCarousel extends Component {
  render() {  
    const itemStyle = {
      height: "80vh",
      objectFit: "cover",
      overflow: "hidden"
    }


    return (
      <Carousel indicators="false" className="mh-50">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage1}
            style={itemStyle}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Gold Valet</h3>
            <p>Stunning cleanup of an out-of-love Mazda m3</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage2}
            style={itemStyle}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage3}
            style={itemStyle}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage4}
            style={itemStyle}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImage5}
            style={itemStyle}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}



export default ImageCarousel;