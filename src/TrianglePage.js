import React from 'react';
import TweetBox from './components/TweetBox';
import Header from './components/Header';
import './components/styles/trianglePage.css';

export default function TrianglePage() {
  return (
    <div className='trianglePage'>
      <Header />
      <TweetBox />
    </div>
  );
}
