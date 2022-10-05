import styled, { css } from 'styled-components';

import { media } from 'styles/utils';
import { Border as StyledBorder } from 'common/layout';

export const Header = styled.header<HeaderProps>`
  padding: 120px 0;
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

  h1 {
    font-size: 40px;
  }

  ${media.phablet`
    padding: 200px 0;

    h1 {
      font-size: 72px;
    }
  `}

  ${({ background }) => background && css`
    background: linear-gradient(
      rgba(27,27,27, .7),
      rgba(27,27,27, .7)
    ), url('${background}');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
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
