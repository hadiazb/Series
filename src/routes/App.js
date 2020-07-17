import React from 'react';
import {
	BrowserRouter,
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
		<BrowserRouter>
			<GlobalStyle />
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Registro} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};
