import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import Paises from './Pages/Paises';
import Itinerary from './Pages/Itinerary';
import itineraryprueba from './Pages/itineraryprueba';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='row'>
					<Switch>
						<Route path='/Home' component={Home} />
						<Route exact path='/Login' component={Login} />
						<Route exact path='/Create' render={() => <Create />} />
						<Route exact path='/Paises' render={() => <Paises />} />
						<Route exact path='/Paises/:ciudad' component={itineraryprueba} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
