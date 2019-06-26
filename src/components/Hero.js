import React from 'react';
import { LiquidDistortionText } from 'react-text-fun';
import './styles/Hero.css';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='magic'>Magic - A Fun React UI</div>
      <LiquidDistortionText
        className='hero'
        text='◻︎'
        fontSize={600}
        fill={'#FF9F1C'}
        speed={0.09}
        volatility={0.05}
      />
    </div>
  );
}
