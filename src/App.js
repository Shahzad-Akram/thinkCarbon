import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import HeaderNav from './components/header/header-nav';
import Footer from './components/sections/Footer';
import FooterInformation from './components/sections/Footer-information';

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
      <Footer />
      <FooterInformation />
    </div>
  );
}

export default App;
