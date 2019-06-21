import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Triangle from './TrianglePage';
import Circle from './CirclePage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/triangle' component={Triangle} />
        <Route exact path='/circle' component={Circle} />
      </Switch>
    </div>
  );
}

export default App;
