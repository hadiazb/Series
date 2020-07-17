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
	'https://cdn.myanimelist.net/images/anime/1439/93480.jpg';

export const Anime = ({
	cover = DEFAULT_IMAGE,
	title = 'Sin title',
	title_japanese = 'Sin title',
	type = 'Sin typo',
	episodes = null,
	duration = null,
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
						<Span>Episodes:</Span> {episodes ? episodes : 'sin dato'}
					</Subtitle>
					<Subtitle>
						<Span> Duración:</Span> {duration ? duration : 'sin dato'}
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