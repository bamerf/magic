import React, { Component } from 'react';
import './styles/Menu.css';
import { sample } from 'lodash';
import { ReactComponent as Hamburger } from './styles/resources/menu.svg';

export default class Menu extends Component {
  state = {
    isClicked: false,
    hover: false,
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    colors: [
      '#F7B32B',
      '#4C0827',
      '#1B263B',
      '#1E3F20',
      '#4D243D',
      '#034748',
      '#8F250C',
      '#4C1036',
      '#253031',
      '#1A090D',
      '#1F0812',
      '#3F3244',
      '#2A0800',
      '#2E294E',
      '#143109'
    ]
  };

  itemStyles = () => {
    if (this.state.hover === true) {
      return {
        visibility: 'visible',
        listStyle: 'none',
        fontSize: '3rem',
        color: 'white',
        width: '120px',
        height: '60px',
        textAlign: 'center',
        borderBottom: '2px solid black',
        backgroundColor: sample(this.state.colors),
        transition: 'all 0.1s ease-in-out'
      };
    } else {
      return {
        visibility: 'hidden'
      };
    }
  };

  toggleMenu() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const { letters } = this.state;
    return (
      <div className='menu'>
        <div className='hamburger'>
          <Hamburger onClick={() => this.toggleMenu()} />
        </div>
        <ul className='menuItems'>
          {letters.map((letter, index) => (
            <li style={this.itemStyles()} className='items' key={index}>
              {`${letter}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
