import React, { Component } from 'react';
import './styles/music.css';
import AudioAnalyser from './AudioAnalyser';

export default class Music extends Component {
  state = {
    audio: null
  };

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div className='audio-visualisation'>
        <div className='audio-title'>Audio Visualisation</div>
        <button onClick={() => this.toggleMicrophone()}>
          {this.state.audio ? 'Stop Microphone' : 'Activate Microphone'}
        </button>
        <div>
          {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
        </div>
      </div>
    );
  }
}
