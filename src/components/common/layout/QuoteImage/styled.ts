import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const ImageContainer = styled.figure<ImageContainerProps>`
  position: relative;
  width: 100%;
  margin: 0;

  & img {
    width: 100%;
    height: auto;
  }

  ${({ width }) => width && css`
    width: ${width};
  `}
`;

type ImageContainerProps = {
  width?: string;
};

export const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.white.off};
  font-style: italic;
  position: absolute;
  left: 30px;
  bottom: 60px;

  ${media.tablet`
    bottom: 40px;
  `}

  ${({ big }) => big && css`
    bottom: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 21px;
  `}
`;

type TextProps = {
  big?: boolean;
};
