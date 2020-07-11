import styled from 'styled-components';

import { Container } from 'common/layout';

export const BorderTop = styled.img`
  width: 120%;
  height: auto;
  margin-bottom: -100px;
`;

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 25px 0 75px;
`;

export const FeatherContainer = styled.div`
  & svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

// @ts-ignore
export const InnerContainer = styled(Container)`
  max-width: 400px;
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
  margin: 40px 0 20px;

  & a {
    margin-right: 20px;
  
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 300ms;

  &:hover {
    color: ${({ theme }) => theme.colors.white.off};
  }
`;
