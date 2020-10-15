import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/home/home';
import HeaderNav from './components/header/header-nav';
import Footer from './components/sections/Footer';
import FooterInformation from './components/sections/Footer-information';
import ItemsPage from './pages/categories/itemsPage';
import ProductView from './pages/product-view/product-view';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './pages/cart/cart';
import { getProducts } from './actions';
import CartCheckout from './pages/cart/cart-checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Login from './pages/user-login&signup/login';
import SignUp from './pages/user-login&signup/signUp';

const stripePromise = loadStripe("pk_test_ZlweN3nPeZpk6GMsvEdprEJd00ao6w8ieU")

function App({ location }) {
  const [dark, setMode] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

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
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route exact path='/items/:id' component={ItemsPage} />
          <Route exact path='/product-view/:id' component={ProductView} />
          <Route exact path='/cart' component={Cart} />
          <Elements stripe={stripePromise}>
            <Route exact path='/cart-checkout' component={CartCheckout} />
          </Elements>
        </Switch>
        <Footer />

        <FooterInformation location={location} />
      </div>
    </section>
  );
}

export default withRouter(App);
