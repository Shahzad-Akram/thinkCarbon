import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import HeaderNav from './components/header/header-nav';
import Footer from './components/sections/Footer';
import FooterInformation from './components/sections/Footer-information';
import Mobiles from './pages/categories/mobiles';

function App() {
	const [ dark, setMode ] = useState(false);

	return (
		<div className={dark ? 'dark-mode background-image' : 'bg-light background-image'}>
			<HeaderNav onChange={() => setMode(!dark)}>{dark ? 'Dark' : 'Light'}</HeaderNav>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/mobiles/:id" component={Mobiles} />
			</Switch>

			<Footer />
			<FooterInformation />
		</div>
	);
}

export default App;
