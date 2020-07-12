import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  cursor: pointer;
`;

export const Content = styled.div`
  position: fixed;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  max-height: 100vh;
  overflow: scroll;
`;

export const Close = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
