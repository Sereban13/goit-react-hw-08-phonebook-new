import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const CardBlock = styled.div`
  display: flex;
  max-height: 40px;
  width: 600px;
  justify-content: flex-start;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Button = styled.button`
  margin-left: auto;
  background-color: yellow;
  border-radius: 5px;
  border: 1px solid firebrick;

  &:hover {
    background-color: red;
    border: 2px solid black;
  }
`;
