import React, { Component } from 'react';
import Testimony from './Testimony';

class Testimonies extends Component {
  render() {
    return (
        <div className="row d-flex justify-content-center">            
            <Testimony></Testimony>
            <Testimony></Testimony>
            <Testimony></Testimony>
        </div>
    );
  }
}

export default Testimonies;