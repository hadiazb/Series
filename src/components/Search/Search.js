import React from 'react';
import { Container, Title, Input, Button, Box } from './Style';

export const Search = () => {
	return (
		<Container>
			<Title>Buscador de las series</Title>
			<Box>
				<Input type='text' placeholder='Search...' />
				<Button type='submit' value='Buscar'/>
			</Box>
		</Container>
	);
};
