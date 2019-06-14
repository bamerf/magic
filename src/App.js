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
        <Header />
        <Hero />
      </div>
      <Carousel className='page-2' />
      <Slider className='page-3' />
      <Video className='page-4' />
    </div>
  );
}

export default App;
