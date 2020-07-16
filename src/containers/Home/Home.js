import React, { Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Search } from '../../components/Search/Search';
import { ListOfSeries } from '../../components/ListOfSeries/ListOfSeries';

export const Home = () => {
	return (
		<Fragment>
			<Header />
			<Search />
			<ListOfSeries/>
			<Footer />
		</Fragment>
	);
};
