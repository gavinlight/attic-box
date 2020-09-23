import styled from 'styled-components';

import { media } from 'styles/utils';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 20;
  padding: 14px 24px;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black.opacity};
`;

export const AtticBox = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
    align-items: center;
    font-weight: 600;
    cursor: pointer;

    & svg {
      margin-right: 20px;
    }
  `}
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  ${media.tablet`
    margin: 0;
  `}
`;

export const Item = styled.li`
  margin-right: 24px;
  cursor: pointer;
  transition: 300ms opacity;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: .8;
  }

  & a {
    height: 40px;
    display: block;
    line-height: 32px;
  }
`;
