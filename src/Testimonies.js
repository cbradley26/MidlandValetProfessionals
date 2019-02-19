import React, { Component } from 'react';
import Testimony from './Testimony';
import CarouselImage1 from './CarouselImages/1.jpg';
import CarouselImage2 from './CarouselImages/2.jpg';
import CarouselImage3 from './CarouselImages/3.jpg';

class Testimonies extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1 className="ml-2"> Testimonies </h1>
        <hr />
        <div className="row d-flex justify-content-center mt-5 mb-5">
          <Testimony reviewersName={"Karl Gaskin"} star={5} comment={"I’d Highly recommend Scott, he’s a great lad with excellent attention to detail. I will be using him from now on to do a gold valet on my car each month. Thanks again mate much appreciated."} image={CarouselImage1}></Testimony>
          <Testimony reviewersName={"Bill Nock"} star={5} comment={"Total professional, Scott did an amazing job bringing the shine back inside and out. Highly recommended."} image={CarouselImage2}></Testimony>
          <Testimony reviewersName={"Amanda Pitt"} star={5} comment={"I would recommend Scott 100% did an amazing job on our car never seen it so shiny. thank you 10/10"} image={CarouselImage3}></Testimony>
        </div>
      </div>
    );
  }
}

export default Testimonies;