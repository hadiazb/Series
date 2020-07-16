import styled from 'styled-components';
import { Link } from "@reach/router";

export const Container = styled.div`
	height: 70px;
	display: flex;
	padding: 0 20px;
	align-items: center;
	justify-content: space-between;
	background-color: #383635;
`;

export const Img = styled.img`
	width: 50px;
`;

export const Login = styled.img`
	border-radius: 50%;
	width: 40px;
  margin-right: 10px;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
`;

export const Anchor = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;
`;
