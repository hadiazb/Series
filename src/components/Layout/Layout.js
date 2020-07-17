import React, { Children } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => (
	<div className='App'>
		<Header />
		{children}
		<Footer />
	</div>
);
