import React, {
	useState,
	useEffect,
	Fragment,
} from 'react';
import { Serie } from '../Serie/Serie';
import { List, Anchor, Title } from './style';
import { Charging } from '../Charging/Charging';

function useSerieData() {
	const [serieOne, setSerieOne] = useState([]);
	const [serieTwo, setSerieTwo] = useState([]);
	const [serieThree, setSerieThree] = useState([]);
	const [serieFour, setSerieFour] = useState([]);
	const [loading, setLoading] = useState(false);
	const URL = 'http://api.jikan.moe/v3/manga/';

	useEffect(function () {
		setLoading(true);
		fetch(`${URL}${1}`)
			.then((data) => data.json())
			.then((res) => {
				setSerieOne(res);
				setLoading(false);
			})
			.catch((error) => console.error());

		fetch(`${URL}${2}`)
			.then((data) => data.json())
			.then((res) => {
				setSerieTwo(res);
				setLoading(false);
			})
			.catch((error) => console.error());

		fetch(`${URL}${3}`)
			.then((data) => data.json())
			.then((res) => {
				setSerieThree(res);
				setLoading(false);
			})
			.catch((error) => console.error());

		fetch(`${URL}${4}`)
			.then((data) => data.json())
			.then((res) => {
				setSerieFour(res);
				setLoading(false);
			})
			.catch((error) => console.error());
	}, []);
	return {
		serieOne,
		serieTwo,
		serieThree,
		serieFour,
		loading,
	};
}

export const ListOfSeries = () => {
	const {
		serieOne,
		serieTwo,
		serieThree,
		serieFour,
		loading,
	} = useSerieData();
	const arr = [];
	arr.push(serieOne, serieTwo, serieThree, serieFour);
	return (
		<Fragment>
			<Title>Series de Manga</Title>
			<List>
				{loading ? (
					<Charging />
				) : (
					arr.map((arr) => (
						<li key={arr.mal_id}>
							<Anchor to='#'>
								<Serie {...arr} cover={arr.image_url} />
							</Anchor>
						</li>
					))
				)}
			</List>
		</Fragment>
	);
};
