import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  cursor: pointer;

  ${({ variant }) => variant === 'card' && css`
    opacity: .4;
  `}
`;

type BackgroundProps = {
  variant?: 'default' | 'card';
};

export const Content = styled.div<ContentProps>`
  position: fixed;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  left: 20px;
  top: 20px;
  max-height: 100vh;
  overflow: auto;

  ${media.tablet`
    width: calc(100% - 120px);
    height: calc(100% - 80px);
    left: 60px;
    top: 60px;
  `}

  ${({ variant }) => variant === 'card' && css`
    width: calc(100% - 40px);
    height: 75%;
    top: 12.5%;
    left: 20px;

    ${media.tablet`
      width: 100%;
      max-width: 1040px;
      height: 75%;
      left: 50%;
      transform: translate(-50%);
      top: 12.5%;
    `}
  `};
`;

type ContentProps = {
  variant?: 'default' | 'card';
};

export const Close = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 2;
`;
