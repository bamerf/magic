import React from 'react';
import './styles/tunnel.css';

export default function Tunnel() {
  createTunnel = () => {
    for (let i = 0; i < 100; i++) {
      return <div className='circle' />;
    }
  };

  return <div className='tunnel'>{this.createTunnel}</div>;
}
