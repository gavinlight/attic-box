import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { media } from 'styles/utils';
import { Container } from 'common/layout';

export const DevlogsListContainer = styled(Container)`
  margin-top: -20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 10;
  position: relative;

  ${media.phablet`
    padding-bottom: 80px;
    margin-top: -40px;
  `}

  ${media.desktop`
    margin-top: -90px;
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

export const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
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
