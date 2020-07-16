import React, { useState, useEffect } from 'react';
import { Serie } from '../Serie/Serie';
import { List } from './style';
import { createArray } from '../../Hook/CreateArr';


function useSerieData() {
	const [serie, setSerie] = useState([]);
	const [loading, setLoading] = useState(false);
	
	useEffect(function () {
		setLoading(true);
		fetch('http://api.jikan.moe/v3/manga/797')
		.then((res) => res.json())
		.then((response) => {
			setSerie(response);
			setLoading(false);
		})
		.catch((error) => console.error());
	}, []);
	return { serie, loading };
}

export const ListOfSeries = () => {
	const arr = createArray();
	console.log(arr);
	const { serie, loading } = useSerieData();
	// console.log(serie);
	return (
		<List>
			<li key={serie.mal_id}>
				<Serie
					cover={serie.image_url}
					title={serie.title}
					title_japanese={serie.title_japanese}
					type={serie.type}
					volumes={serie.volumes}
					chapters={serie.chapters}
					score={serie.score}
					popularity={serie.popularity}
					status={serie.status}
				/>
			</li>
		</List>
	);
};
