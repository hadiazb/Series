import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { Home } from '../containers/Home/Home';
import { Layout } from '../components/Layout/Layout';
import { NotFound } from '../containers/NotFound/NotFound';
import { Registro } from '../containers/Registro/Registro';

export const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Layout>
				<Switch>
					<Route exact path='/register' component={Registro} />
					<Route exact path='/' component={Home} />
					<Route component={NotFound}  path='/*'/>;
				</Switch>
			</Layout>
		</Router>
	);
};
