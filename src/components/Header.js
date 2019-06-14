import React, { Component } from 'react';
import './styles/Header.css';
import { ReactComponent as Circle } from './styles/resources/Circle.svg';
import { ReactComponent as Rectangle } from './styles/resources/Rectangle.svg';
import { ReactComponent as Triangle } from './styles/resources/Triangle.svg';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='pages'>
          <Circle />
          <Rectangle />
          <Triangle />
        </div>
      </div>
    );
  }
}
