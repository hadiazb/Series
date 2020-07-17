import styled from 'styled-components';

export const Container = styled.div`
  max-width: 550px;
  min-width: 270px;
  margin: 3px auto;
  height:150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px black;
  background-color: #666260;
  color: white;
  @media (min-width: 400px) {
    font-size: 1em;
    height:250px;
  }
`;

export const Image = styled.img`
  width: 40%;
  border-right: 2px solid black;
  @media (min-width: 400px) {
    width: 45%;
  }
`;

export const Box = styled.div`
  width: calc(100% - 100px);
`;

export const Title = styled.h5`
  width: 100%;
  text-align: center;
  padding: 0px 0 3px;
  font-size: .7em;
  @media (min-width: 400px) {
  font-size: 1em;
  padding: 0px 0 15px;
  }
`;

export const Subtitle = styled.p`
  margin: 3px 20px 0 10px;
  font-weight: 300;
  font-size: .7em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, .4);
  @media (min-width: 400px) {
    font-size: 1em;
    margin: 4px 20px 0 10px;
  }
`;

export const Span = styled.span`
  font-weight: 900;
`;