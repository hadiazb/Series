import React from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { Home } from '../containers/Home/Home';

export const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Home />
		</div>
	);
};
