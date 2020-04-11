import styled from 'styled-components';

export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 72px;
  font-weight: 400;
  margin: 0 0 10px;

  &:after {
    content: '';
    width: 65px;
    height: 2px;
    background-color: #161616;
  }
`;
