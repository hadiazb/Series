import React from 'react';
import {
	Container,
	Image,
	Box,
	Title,
	Subtitle,
} from './style';
const DEFAULT_IMAGE =
	'https://cdn.myanimelist.net/images/manga/2/22943.jpg';

export const Serie = ({
	cover = DEFAULT_IMAGE,
	title = 'Sin title',
	title_japanese = 'Sin title',
	type = 'Sin typo',
	volumes = null,
	chapters = null,
	score = null,
	popularity = null,
	status = 'Sin status',
}) => {
	return (
		<Container>
			<Image src={cover} alt={title} />
			<Box>
				<Title>{title}</Title>
				<Title>{title_japanese}</Title>
				<div>
					<Subtitle>Tipo: {type}</Subtitle>
					<Subtitle>Volumen: {volumes}</Subtitle>
					<Subtitle>Capitulos: {chapters}</Subtitle>
					<Subtitle>Score: {score}</Subtitle>
					<Subtitle>Popularidad: {popularity}</Subtitle>
					<Subtitle>Status: {status}</Subtitle>
				</div>
			</Box>
		</Container>
	);
};
