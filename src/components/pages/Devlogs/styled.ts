import styled, { css } from 'styled-components';

import { media } from 'styles/utils';
import { Border as StyledBorder, Container } from 'common/layout';

export const Header = styled.header<HeaderProps>`
  padding: 200px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray.dark};

  svg {
    margin: 0 auto;

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  p {
    max-width: 360px;
    margin: 40px auto 0;
  }

  ${({ background }) => background && css`
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background: linear-gradient(
      rgba(27,27,27, .7),
      rgba(27,27,27, .7)),
      url('${background}');
    );
  `};
`;

type HeaderProps = {
  background?: string;
};

export const BorderTop = styled(StyledBorder)`
  width: 110%;
  height: auto;
  object-fit: fill;
  margin-top: -30px;

  ${media.tablet`
    margin-top: -80px;
  `}

  ${media.huge`
    margin-top: -120px;
  `}
`;

export const Devlogs = styled(Container)`
  margin-top: -40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  ${media.phablet`
    padding-bottom: 80px;
  `}
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  p {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
`;

export const Content = styled.div`
  a {
    color: ${({ theme }) => theme.colors.red};
    text-decoration: none;
    transition: color 300ms;

    &:hover {
      color: ${({ theme }) => theme.colors.red.hover};
    }
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 300ms;
`;

export const Border = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const DevlogContainer = styled.div<DevlogContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 20px 80px;

  ${Content} {
    margin-top: 20px;
  }

  &:hover ${Thumbnail} {
    transform: scale(1.1);
  }

  ${media.phablet<DevlogContainerProps>`
    width: calc(50% - 40px);

    ${({ variant }) => variant === 'large' && css`
      && {
        width: 100%;
        max-width: 700px;
        flex-direction: row;
        margin: 0 0 100px;

        ${Content} {
          margin-top: 0;
          margin-left: 28px;
        }

        ${Image} {
          min-width: 340px;
          max-width: 340px;
        }
      }
    `};
  `}

  ${media.tablet<DevlogContainerProps>`
    max-width: 340px;
  `}

`;

type DevlogContainerProps = {
  variant?: 'large' | 'regular';
};

export const GridBreak = styled.div`
  width: 0;
  flex-basis: 100%;
`;
