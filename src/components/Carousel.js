import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import './styles/carousel.css';

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: '#2B2118' }}>
      Ca...
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: '#5E0B15' }}>
      ...rou...
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: '#0D1F22' }}>
      ...sel
    </animated.div>
  )
];

export default function Carousel() {
  const [index, set] = useState(0);
  const changePage = useCallback(() => set(state => (state + 1) % 3), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });
  return (
    <div className='carousel' onClick={changePage}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}
