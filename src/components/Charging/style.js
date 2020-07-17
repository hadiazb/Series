import styled, { keyframes } from 'styled-components';

export const Box = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Block = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 5px solid black;
	border-left: 5px solid black;
	border-bottom: 5px solid black;
	border-right: 5px solid white;
	background-color: white;
	border-radius: 50%;
  animation-name: gires;
	animation-duration: 4s;
	animation-iteration-count: infinite;

	@keyframes gires {
		0% {
			transform: rotate(360deg);
		}
    100% {
			transform: rotate(0deg);
    }
	}
`;

export const BlockIntern = styled.div`
	width: 80px;
	height: 80px;
	border-top: 5px solid green;
	border-left: 5px solid white;
	border-bottom: 5px solid green;
	border-right: 5px solid green;
	background-color: white;
	border-radius: 50%;
	animation-name: gires;
	animation-duration: 4s;
	animation-iteration-count: infinite;

	@keyframes gires {
		0% {
			transform: rotate(0deg);
		}
    100% {
			transform: rotate(360deg);
    }
	}
`;
