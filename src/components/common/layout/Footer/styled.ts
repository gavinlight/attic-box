import styled, { css } from 'styled-components';

import { media } from 'styles/utils';
import { Container } from 'common/layout';

export const BorderTop = styled.img`
  width: 100%;
  height: auto;
  margin-top: -25px;

  ${media.tablet`
    width: 110%;
    margin-top: 0;
    margin-bottom: -100px;
  `}
`;

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding-bottom: 50px;

  ${media.tablet`
    padding: 25px 0 75px;
  `}
`;

export const FeatherContainer = styled.div`
  & svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

// @ts-ignore
export const InnerContainer = styled(Container)`
  max-width: 420px;
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
