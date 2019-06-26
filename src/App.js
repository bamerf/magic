import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TextPage from './TextPage';
import AudioPage from './AudioPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/textPage' component={TextPage} />
        <Route exact path='/audioPage' component={AudioPage} />
      </Switch>
    </div>
  );
}

export default App;
