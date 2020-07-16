import React, { Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Search } from '../../components/Search/Search';

export const Home = () => {
	return (
		<Fragment>
			<Header />
			<Search />
			<Footer />
		</Fragment>
	);
};
