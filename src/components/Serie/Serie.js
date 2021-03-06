import React from 'react';
import {
	Container,
	Image,
	Box,
	Title,
	Subtitle,
	Span,
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
					<Subtitle>
						<Span>Tipo:</Span>  {type ? type : 'sin dato'}
					</Subtitle>
					<Subtitle>
						<Span>Volumen:</Span> {volumes ? volumes : 'sin dato'}
					</Subtitle>
					<Subtitle>
						<Span> Capitulos:</Span> {chapters ? chapters : 'sin dato'}
					</Subtitle>
					<Subtitle>
						<Span>Score:</Span> {score ? score : 'sin dato'}
					</Subtitle>
					<Subtitle>
						<Span>Popularidad:</Span> {popularity ? popularity : 'sin dato'}
					</Subtitle>
					<Subtitle>
						<Span>Status:</Span> {status ? status : 'sin dato'}
					</Subtitle>
				</div>
			</Box>
		</Container>
	);
};
