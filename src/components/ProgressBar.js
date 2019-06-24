import React from 'react';
import './styles/ProgressBar.css';

const ProgressBar = props => {
  const length = props.chars < 140 ? props.chars * 0.714 : 100;

  const color =
    props.chars > 120
      ? 'rgb(244, 65, 65)'
      : props.chars > 90
      ? 'rgb(244, 130, 65)'
      : props.chars > 60
      ? 'rgb(244, 199, 65)'
      : props.chars > 30
      ? 'rgb(229, 244, 65)'
      : 'rgb(106, 244, 65)';

  const bar = {
    backgroundColor: `${color}`,
    height: '20px',
    width: `${length}%`,
    transition: 'all 0.2s linear'
  };

  return (
    <div className='parent'>
      <div style={bar} />
    </div>
  );
};

export default ProgressBar;
