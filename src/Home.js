import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Slider from './components/Slider';
import Video from './components/Video';

export default function Home() {
  return (
    <div>
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
