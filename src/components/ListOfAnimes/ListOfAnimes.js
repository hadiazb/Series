import React, {
	useState,
	useEffect,
	Fragment,
} from 'react';
import { Anime } from '../Anime/Anime';
import { List, Anchor, Title } from './style';

function useAnimeData() {
	const [animeOne, setAnimeOne] = useState([]);
	const [animeTwo, setAnimeTwo] = useState([]);
	const [animeThree, setAnimeThree] = useState([]);
	const [animeFour, setAnimeFour] = useState([]);
	const [loading, setLoading] = useState(false);
	const URL = 'https://api.jikan.moe/v3/anime/';

	useEffect(function () {
		setLoading(true);
		fetch(`${URL}${1}`)
			.then((data) => data.json())
			.then((res) => {
				setAnimeOne(res);
				setLoading(false);
			})
			.catch((error) => console.error());

		fetch(`${URL}${5}`)
			.then((data) => data.json())
			.then((res) => {
				setAnimeTwo(res);
				setLoading(false);
			})
			.catch((error) => console.error());

		fetch(`${URL}${6}`)
			.then((data) => data.json())
			.then((res) => {
				setAnimeThree(res);
				setLoading(false);
			})
			.catch((error) => console.error());

		fetch(`${URL}${7}`)
			.then((data) => data.json())
			.then((res) => {
				setAnimeFour(res);
				setLoading(false);
			})
			.catch((error) => console.error());
	}, []);
	return {
		animeOne,
		animeTwo,
		animeThree,
		animeFour,
		loading,
	};
}

export const ListOfAnimes = () => {
	const {
		animeOne,
		animeTwo,
		animeThree,
		animeFour,
		loading,
	} = useAnimeData();
	const arr = [];
	arr.push(animeOne, animeTwo, animeThree, animeFour);
	return (
		<Fragment>
			<Title>Series de Anime</Title>
			<List>
				{loading ? (
					<h1>Cargando...</h1>
				) : (
					arr.map((arr) => (
						<li key={arr.mal_id}>
							<Anchor to='#'>
								<Anime {...arr} cover={arr.image_url} />
							</Anchor>
						</li>
					))
				)}
			</List>
		</Fragment>
	);
};
