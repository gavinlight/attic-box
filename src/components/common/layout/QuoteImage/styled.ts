import styled, { css } from 'styled-components';

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

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white.off};
  font-style: italic;
  position: absolute;
  left: 30px;
  bottom: 60px;
`;
