import React, { Component } from 'react';
import './styles/shutter.css';
import { Gradient } from 'react-gradient';

const gradients = [['#bd19d6', '#ea7d10'], ['#ff2121', '#25c668']];
export default class Shutter extends Component {
  render() {
    return (
      <div className='shutter-bg'>
        <Gradient
          className='gradient'
          gradients={gradients}
          property='background'
          duration={1000}
          angle='45deg'
        />
        <div className='shutter-fg' />
      </div>
    );
  }
}
