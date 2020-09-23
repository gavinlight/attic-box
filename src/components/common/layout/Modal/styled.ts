import styled from 'styled-components';

import { media } from 'styles/utils';

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
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  max-height: 100vh;
  padding: 20px;
  overflow: auto;

  ${media.tablet`
    padding: 60px 60px 20px;
  `}
`;

export const Close = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 2;
`;
