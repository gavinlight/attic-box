import styled, { css } from 'styled-components';

import { media } from 'styles/utils';
import { Container, Border } from 'common/layout';

export const BorderTop = styled(Border)`
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

export const FooterContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black};
  padding-bottom: 50px;
  margin-top: -10px;

  ${media.mobile`
    margin-top: -30px;
  `}

  ${media.tablet`
    margin-top: -50px;
    padding-bottom: 75px;
  `}

  ${media.large`
    margin-top: -100px;
  `}
`;

export const FeatherContainer = styled.div`
  & svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const InnerContainer = styled(Container)`
  max-width: 550px;
  display: flex;
  align-items: center;
`;

export const AtticBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;

  & svg {
    margin-right: 10px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0 20px;

  & a {
    margin-right: 20px;
  
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Link = styled.a<LinkProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 300ms;

  &:hover {
    color: ${({ theme }) => theme.colors.white.off};
  }

  ${({ underline, theme }) => underline && css`
    border-bottom: 1px solid ${theme.colors.white};
  `}
`;

type LinkProps = {
  underline?: boolean;
};
