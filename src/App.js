import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import HeaderNav from './components/header/header-nav';
import Footer from './components/sections/Footer';
import FooterInformation from './components/sections/Footer-information';
import Mobiles from './pages/categories/mobiles';
import ProductView from './pages/product-view/product-view';

function App() {
  const [dark, setMode] = useState(false);

  return (
    <section
      className={
        dark ? 'dark-mode background-image' : 'bg-light background-image'
      }
    >
      <HeaderNav onChange={() => setMode(!dark)}>
        {dark ? 'Dark' : 'Light'}
      </HeaderNav>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mobiles' component={Mobiles} />
          <Route exact path='/product-view' component={ProductView} />
        </Switch>
        <Footer />
        <FooterInformation />
      </div>
    </section>
  );
}

export default App;
