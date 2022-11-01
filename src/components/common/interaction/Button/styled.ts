import * as i from 'types';
import styled, { css } from 'styled-components';

import BackgroundTexture from 'images/texture.jpeg';

export const StyledButton = styled.button<i.ButtonProps>`
  display: inline-block;
  appearance: none;
  padding: 22px 40px 18px;
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.crimson};
  color: ${({ theme }) => theme.colors.white.gray};
  position: relative;
  transition: 300ms opacity;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.red.button};
  border-width: 4px;
  border-style: solid;
  border-left-color: ${({ theme }) => theme.colors.red.border.left};
  border-top-color: ${({ theme }) => theme.colors.red.border.top};
  border-right-color: ${({ theme }) => theme.colors.red.border.right};
  border-bottom-color: ${({ theme }) => theme.colors.red.border.bottom};
  transition: border-color 300ms, background-color 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.red.border.top};
    border-color: ${({ theme }) => theme.colors.red.border.top};
  }

  &:focus {
    outline: none;
  }

  ${({ variant, theme }) => variant === 'secondary' && css`
    background-color: ${theme.colors.gray.button};
    color: ${theme.colors.gray.text};
    border-left-color: ${({ theme }) => theme.colors.gray.border.left};
    border-top-color: ${({ theme }) => theme.colors.gray.border.top};
    border-right-color: ${({ theme }) => theme.colors.gray.border.right};
    border-bottom-color: ${({ theme }) => theme.colors.gray.border.bottom};

    &:hover {
      background-color: ${theme.colors.gray.hover};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.gray.border.top};
      border-color: ${({ theme }) => theme.colors.gray.border.top};
    }
  `};

  ${({ small }) => small && css`
    padding: 13px 28px 12px;
  `}

  ${({ bold }) => bold && css`
    font-weight: 700;
  `}

  &:before {
    content: '';
    position: absolute;
    left: -4px;
    top: -4px;
    background-image: url(${BackgroundTexture});
    opacity: .3;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    display: block;
    transition: opacity 300ms;
  }
`;

export const ButtonContent = styled.span<ButtonContentProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;

  ${({ vague, theme }) => vague && css`
    color: ${theme.colors.gray};
  `}
`;

type ButtonContentProps = {
  vague?: boolean;
};
