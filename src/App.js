import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Registration from './components/pages/registration/Registration';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/registration" component={Registration} />
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
