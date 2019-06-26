import React from 'react';
import TweetBox from './components/TweetBox';
import Header from './components/Header';
import './components/styles/textPage.css';

export default function TextPage() {
  return (
    <div className='textPage'>
      <Header />
      <TweetBox />
    </div>
  );
}
