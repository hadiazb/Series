import React from 'react';
import { Container, Img, Login, Box, Anchor } from './style';

export const Header = () => {
	const LOGO =
    'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/Manga_Entertainment.svg/1200px-Manga_Entertainment.svg.png';
  const LOGIN = 'https://icon2.cleanpng.com/20180331/ffe/kisspng-computer-icons-user-clip-art-user-5abf13dad7aed4.5909364715224718988835.jpg'
	return (
		<Container>
			<Img src={LOGO} alt='' />
			<Box>
				<Login src={LOGIN} alt='' />
				<Anchor to='/'>Login</Anchor>
			</Box>
		</Container>
	);
};
