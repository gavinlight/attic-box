import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const HeaderContainer = styled.header<HeaderContainerProps>`
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

  ${({ isTransparent }) => isTransparent && css`
    background-color: transparent;
  `};
`;

type HeaderContainerProps = {
  isTransparent?: boolean;
};

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

  &:last-child {
    margin-right: 0;
  }

  > span {
    transition: 300ms opacity;

    &:hover {
      opacity: .6;
    }
  }
`;
