import React, { Component } from 'react';
import './styles/shutter.css';

export default class Shutter extends Component {
  render() {
    return (
      <div className='shutter-bg'>
        <div className='shutter-fg' />
      </div>
    );
  }
}
