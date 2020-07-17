import styled from 'styled-components';

export const Container = styled.div`
	min-width: 290px;
	max-width: 100%;
	margin: 0 auto;
	height: 576px;
	text-align: center;
	background-image: url('https://c.wallhere.com/photos/c9/ac/anime_anime_girls_black_background-1659645.jpg!d');
	color: white;
	opacity: 0.7;
`;

export const Form = styled.form`
	min-width: 290px;
	max-width: 400px;
	margin: 10px auto;
	padding-top: 20px;
	height: 350px;
`;

export const Input = styled.input`
	height: 35px;
	width: 90%;
	margin: 15px 0;
	padding-left: 20px;
	border-radius: 15px;
	border: 1px solid white;
	outline: none;
  color: white;
  font-weight: 900;
	background-color: rgba(255, 255, 255, .3);
	::placeholder {
		color: white;
		font-family: 'Muli', sans-serif;
	}
`;

export const Title = styled.h3`
	padding: 100px 0 20px;
`;

export const Botton = styled.input`
	height: 35px;
	width: 90%;
	margin: 15px 0;
	padding-left: 20px;
	border-radius: 15px;
	border: 1px solid white;
	outline: none;
  color: white;
	background-color: rgba(0, 0, 0, .5);
  cursor: pointer;
`;