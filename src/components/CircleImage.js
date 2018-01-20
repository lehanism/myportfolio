import React, { Component } from 'react';

import luke from '../img/luke1.png';

class CircleImage extends Component {
  render() {
    return (
      <div className="CircleImage">
        <img src={luke}  alt="luke"/>
      </div>
    );
  }
}

export default CircleImage;
