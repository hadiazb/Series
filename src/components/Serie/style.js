import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  min-width: 270px;
  margin: 3px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  background-color: #666260;
  color: white;
`;

export const Image = styled.img`
  width: 100px;
  border-right: 2px solid black;
`;

export const Box = styled.div`
  width: calc(100% - 100px);
`;

export const Title = styled.h5`
  width: 100%;
  text-align: center;
  padding: 2px 0;
  font-size: .7em;
`;

export const Subtitle = styled.p`
  padding: 4px 0 0 5px;
  font-weight: 300;
  font-size: .6em;
`;
