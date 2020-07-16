import styled from 'styled-components';
import { Link } from '@reach/router';

export const Container = styled.div`
	height: 50px;
	width: 100%;
  padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #383635;
`;

export const Anchor = styled(Link)`
	color: rgba(255, 255, 255, 0.8);
	font-size: 1.2em;
`;
