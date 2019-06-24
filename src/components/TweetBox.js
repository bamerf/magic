import React from 'react';
import './styles/TweetBox.css';
import ProgressBar from './ProgressBar';
import axios from 'axios';

class TweetBox extends React.Component {
  state = {
    character: ''
  };

  handleChange = event => {
    this.setState({
      character: event.target.value
    });
  };

  handleClick = () => {
    let text = encodeURI(this.state.character);
    console.log(text);
    axios
      .post(
        `https://api.meaningcloud.com/sentiment-2.1?key=b584cf18d0fa2934b0abe045f6280338&of=json&text=${text}&model=general&lang=en&url=""&doc=""&txtf=plain`
      )
      .then(res => {
        console.log(res);
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
          <ProgressBar chars={character.length} />
          <textarea
            onChange={this.handleChange}
            placeholder='Type something...'
            cols='50'
            rows='5'
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
        </div>
      </div>
    );
  }
}

export default TweetBox;
