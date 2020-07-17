import React, { Fragment } from 'react';
import { Search } from '../../components/Search/Search';
import { ListOfSeries } from '../../components/ListOfSeries/ListOfSeries';
import { ListOfAnimes } from '../../components/ListOfAnimes/ListOfAnimes'

export const Home = () => {
	return (
		<Fragment>
			<Search />
			<ListOfSeries/>
			<ListOfAnimes/>
		</Fragment>
	);
};
