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
  left: 50%;
  top: 25vh;
  transform: translateX(-50%);
`;

export const Close = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
