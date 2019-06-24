import React from 'react';
import Header from './components/Header';
import './components/styles/circlePage.css';
import Tunnel from './components/Tunnel';

export default function CirclePage() {
  return (
    <div className='circlePage'>
      <Header />
      <Tunnel />
    </div>
  );
}
