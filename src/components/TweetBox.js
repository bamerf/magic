import React from 'react';
import './styles/TweetBox.css';
import ProgressBar from './ProgressBar';
import axios from 'axios';

class TweetBox extends React.Component {
  state = {
    character: '',
    sentiment: ''
  };

  handleChange = event => {
    this.setState({
      character: event.target.value
    });
  };

  handleClick = () => {
    const API_KEY = process.env.REACT_APP_TEXT_ANALYSIS_API_KEY;
    let text = encodeURI(this.state.character);
    console.log(text);
    axios
      .post(
        `https://api.dandelion.eu/datatxt/sent/v1?lang=en&text=${text}&token=${API_KEY}`
      )
      .then(res => {
        this.setState({
          sentiment: res.data.sentiment.type
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { character } = this.state;
    const isDisabled = character.length === 0 || character.length > 140;
    const color =
      character.length > 100
        ? 'rgb(244, 65, 65)'
        : character.length > 60
        ? 'rgb(244, 199, 65)'
        : 'rgb(106, 244, 65)';

    return (
      <div className='tweet-box-parent'>
        <div className='tweet-box'>
          <div className='tweetbox-title'>Text Sentiment Analysis</div>
          <ProgressBar chars={character.length} />
          <textarea
            onChange={this.handleChange}
            placeholder='Type something...'
            cols='50'
            rows='4'
          />
          <footer className='tweet-box-footer'>
            <span className='character-num' style={{ color }}>
              {140 - character.length}
            </span>
            <button
              onClick={() => this.handleClick()}
              className='tweet-btn'
              disabled={isDisabled}
            >
              Analyse
            </button>
          </footer>
          <div className='sentiment'>
            {(() => {
              if (this.state.sentiment === 'positive') {
                return (
                  <div className='expression'>
                    <span role='img' aria-label='Smiley'>
                      😄
                    </span>
                  </div>
                );
              } else if (this.state.sentiment === 'negative') {
                return (
                  <div className='expression'>
                    <span role='img' aria-label='Unhappy'>
                      🙁
                    </span>
                  </div>
                );
              } else if (this.state.sentiment === 'neutral') {
                return (
                  <div className='expression'>
                    <span role='img' aria-label='Neutral'>
                      😐
                    </span>
                  </div>
                );
              } else {
                return '';
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default TweetBox;
