import React from 'react';
import { Container, Form, Input, Title, Botton } from './style';

export const Registro = () => {
	return (
		<Container>
			<Title>Registro</Title>
			<Form action=''>
				<Input type='text' placeholder='Name...' />
				<Input type='text' placeholder='Lastname...' />
				<Input type='email' placeholder='email...' />
				<Input type='text' placeholder='Phone...' />
				<Botton type='submit' value='Submit' />
			</Form>
		</Container>
	);
};
