import React from 'react';
import { LiquidDistortionText } from 'react-text-fun';
import './styles/Hero.css';

export default function Hero() {
  return (
    <div className='hero'>
      <LiquidDistortionText
        className='hero'
        text='◻︎'
        fontSize={500}
        fill={'#FF9F1C'}
        speed={0.09}
        volatility={0.05}
      />
    </div>
  );
}
