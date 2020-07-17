import React, { Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Search } from '../../components/Search/Search';
import { ListOfSeries } from '../../components/ListOfSeries/ListOfSeries';
import { ListOfAnimes } from '../../components/ListOfAnimes/ListOfAnimes'

export const Home = () => {
	return (
		<Fragment>
			<Header />
			<Search />
			<ListOfSeries/>
			<ListOfAnimes/>
			<Footer />
		</Fragment>
	);
};
