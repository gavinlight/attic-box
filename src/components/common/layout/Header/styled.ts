import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  z-index: 20;
  padding: 14px 24px;
  left: 0;
  height: 75px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black.opacity};
  transition: transform 400ms;

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      background-color: transparent;
    `};

  ${({ $hide }) =>
    $hide &&
    css`
      transform: translateY(-100%);
    `};
`;

type HeaderContainerProps = {
  isTransparent?: boolean;
  $hide: boolean;
};

export const AtticBox = styled.div`
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    font-weight: 600;
    cursor: pointer;

    & svg {
      display: block;
      margin-left: 20px;
    }

    ${media.tablet`
      transform: none;
      position: static;
      flex-direction: row;

      & svg {
        margin-right: 20px;
        margin-left: 0;
      }
    `}
  }
`;

export const Menu = styled.ul<MenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 75px 20px 0;
  width: 100%;
  transform: translateX(-100%);
  transition: transform 0.75s;
  margin: 0;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.black};

  ${({ $open }) =>
    $open &&
    css`
      transform: translateY(0%);
    `};

  ${media.tablet`
    display: flex;
    align-items: center;
    position: static;
    padding: 0;
    background-color: transparent;
    width: auto;
    height: auto;
    transform: none;
  `}
`;

type MenuProps = {
  $open: boolean;
};

export const Item = styled.li`
  font-size: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;

  > a {
    transition: 300ms opacity;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }
  }

  ${media.tablet`
    margin: 0 24px 0 0;
    font-size: 16px;

    &:last-child {
      margin-right: 0;
    }
  `}
`;

export const ToggleMobileMenu = styled.div<ToggleMobileMenuProps>`
  cursor: pointer;
  z-index: 10;
  width: 35px;
  height: 23px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  > span {
    display: block;
    left: 0;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;

      ${({ $open }) =>
        $open &&
        css`
          top: 10px;
          width: 0%;
          left: 50%;
        `};
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 10px;
    }

    &:nth-child(2) {
      ${({ $open }) =>
        $open &&
        css`
          transform: rotate(45deg);
        `};
    }

    &:nth-child(3) {
      ${({ $open }) =>
        $open &&
        css`
          transform: rotate(-45deg);
        `};
    }

    &:nth-child(4) {
      top: 20px;

      ${({ $open }) =>
        $open &&
        css`
          top: 10px;
          width: 0%;
          left: 50%;
        `};
    }
  }

  ${media.tablet`
    display: none;
  `}
`;

type ToggleMobileMenuProps = {
  $open: boolean;
};
