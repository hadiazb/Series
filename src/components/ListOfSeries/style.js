import styled from 'styled-components';

export const List = styled.ul`
	padding: 0 20px 20px;
	display: grid;
	grid-template-columns: 1fr;
  grid-gap: 10px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
