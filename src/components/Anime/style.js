import styled from 'styled-components';

export const Container = styled.div`
  max-width: 550px;
  min-width: 270px;
  margin: 3px auto;
  height:250px;
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
  width: 45%;
  border-right: 2px solid black;
`;

export const Box = styled.div`
  width: calc(100% - 100px);
`;

export const Title = styled.h5`
  width: 100%;
  text-align: center;
  padding: 0px 0 15px;
  font-size: 1em;
`;

export const Subtitle = styled.p`
  margin: 4px 20px 0 10px;
  font-weight: 300;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, .4);
`;

export const Span = styled.span`
  font-weight: 900;
`;