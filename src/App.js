import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/home/home';
import HeaderNav from './components/header/header-nav';
import Footer from './components/sections/Footer';
import FooterInformation from './components/sections/Footer-information';
import Mobiles from './pages/categories/mobiles';
import ProductView from './pages/product-view/product-view';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './pages/cart/cart';
import { getProducts } from './actions';

function App({ location }) {
  const [dark, setMode] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  console.log(products);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

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
          <Route exact path='/mobiles/:id' component={Mobiles} />
          <Route exact path='/product-view' component={ProductView} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
        <Footer />
        <FooterInformation location={location} />
      </div>
    </section>
  );
}

export default withRouter(App);
