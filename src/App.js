import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import HeaderNav from './components/header/header-nav';

function App() {
  const [dark, setMode] = useState(false);

  return (
    <div className={dark ? 'dark-mode' : 'bg-light '}>
      <HeaderNav onChange={() => setMode(!dark)}>
        {dark ? 'Dark' : 'Light'}
      </HeaderNav>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
