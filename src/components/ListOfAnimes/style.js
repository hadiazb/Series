import styled from 'styled-components';
import { Link } from "@reach/router";

export const List = styled.ul`
	padding: 20px 20px 20px;
	display: grid;
	grid-template-columns: 1fr;
  grid-gap: 20px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Anchor = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h4`
  width: 100%;
  margin-top: 40px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 25px;
`;