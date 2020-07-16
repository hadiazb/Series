import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  padding: 20px 0;
`;

export const Input = styled.input`
  width: calc(100% - 60px);
  height: 35px;
  padding-left: 20px;
  outline: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Button = styled.input`
  width: 60px;
  height: 35px;
  outline: none;
  background-color: #383635;
  border: none;
  color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 60%;
`;