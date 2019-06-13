import React, { Component } from 'react';
import './styles/video.css';
import { Gradient } from 'react-gradient';
import { sample } from 'lodash';

const gradients = [['#bd19d6', '#ea7d10'], ['#ff2121', '#25c668']];

const blendModes = [
  'difference',
  'normal',
  'multiply',
  'overlay',
  'hard-light',
  'darken',
  'exclusion',
  'soft-light',
  'color-burn',
  'luminosity'
];

export default class Video extends Component {
  state = {
    blendMode: true
  };

  changeBlendMode = () => {
    let { blendMode } = this.state;
    blendMode = !blendMode;
    this.setState({ blendMode });
  };

  changeColor = () => {
    let { blendMode } = this.state;
    if (blendMode || !blendMode) {
      return sample(blendModes);
    }
  };

  render() {
    return (
      <div className='video'>
        <div className='video-fg' onClick={() => this.changeBlendMode()} />
        <div className='video-bg'>
          <iframe
            src='https://player.vimeo.com/video/145953950?autoplay=1&loop=1&autopause=0'
            className='video'
            width='640'
            height='360'
            // frameborder='0'
            frameBorder='0'
            allow='autoplay; fullscreen'
            // allowfullscreen
            allowFullScreen
            // loop='true'
            loop={true}
            controls='0'
            style={{ mixBlendMode: `${this.changeColor()}` }}
          />
          <Gradient
            className='gradient'
            gradients={gradients}
            property='background'
            duration={2000}
            angle='-90deg'
          />
        </div>
      </div>
    );
  }
}
