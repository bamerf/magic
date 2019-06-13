import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Slider from './components/Slider';
import Video from './components/Video';

function App() {
  return (
    <div className='App'>
      <div className='front-page'>
        <Menu />
        <div className='header'>
          <Header />
        </div>
        <div className='hero'>
          <Hero />
        </div>
      </div>
      <Carousel />
      <Slider />
      <Video />
    </div>
  );
}

export default App;
