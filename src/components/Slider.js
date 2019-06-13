import './styles/slider.css';
import React, { Component } from 'react';
import triangleImage from './styles/resources/trianglify.png';
export default class Slider extends Component {
  state = {
    sliderClosed: true
  };

  handleClick = () => {
    let { sliderClosed } = this.state;
    sliderClosed = !sliderClosed;
    this.setState({ sliderClosed });
  };

  sliderWidth = () => {
    return this.state.sliderClosed ? '50%' : '0%';
  };

  render() {
    return (
      <div className='slider-fg' onClick={() => this.handleClick()}>
        <div className='slider-bg'>
          <div className='left' style={{ width: `${this.sliderWidth()}` }} />
          <div className='right' style={{ width: `${this.sliderWidth()}` }} />
          <img className='triangle-img' src={triangleImage} alt='' />
        </div>
      </div>
    );
  }
}
