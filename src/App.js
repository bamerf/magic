import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Slider from './components/Slider';
import Shutter from './components/Shutter';

function App() {
  return (
    <div className='App'>
      <div className='front-page'>
        <div className='header'>
          <Menu />
          <Header />
        </div>
        <div className='hero'>
          <Hero />
        </div>
      </div>
      <Carousel />
      <Slider />
      <Shutter />
    </div>
  );
}

export default App;
