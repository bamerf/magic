import React from 'react';
import Header from './components/Header';
import './components/styles/audioPage.css';
import Music from './components/Music';

export default function AudioPage() {
  return (
    <div className='audioPage'>
      <Header />
      <Music />
    </div>
  );
}
