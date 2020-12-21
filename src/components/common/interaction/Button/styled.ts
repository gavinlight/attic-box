import * as i from 'types';
import styled, { css } from 'styled-components';

import BackgroundTexture from 'images/texture.jpeg';

export const StyledButton = styled.button<i.ButtonProps>`
  appearance: none;
  padding: 14px 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.crimson};
  color: ${({ theme }) => theme.colors.white.gray};
  position: relative;
  transition: 300ms opacity;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: #8E1E20;
  border-width: 4px;
  border-style: solid;
  border-left-color: #310F10;
  border-top-color: #52191A;
  border-right-color: #611C1E;
  border-bottom-color: #3F1112;
  transition: border-color 300ms, background-color 300ms;

  &:hover {
    opacity: .95;
  }

  &:active {
    background-color: #52191A;
    border-color: #52191A;
  }

  &:focus {
    outline: none;
  }

  ${({ variant, theme }) => variant === 'secondary' && css`
    background-color: ${theme.colors.gray.button};
    color: ${theme.colors.gray.text};
    border-top-color: #131415;
    border-left-color: #0D1010;
    border-bottom-color: #111112;
    border-right-color: #202323;

    &:active {
      background-color: #131415;
      border-color: #131415;
    }
  `};

  ${({ small }) => small && css`
    padding: 8px 28px;
  `}

  ${({ bold, small }) => bold && css`
    font-weight: 700;
    padding-bottom: 4px;

    ${small && css`
      padding-bottom: 2px;
    `}
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

  ${({ vague }) => vague && css`
    color: ${({ theme }) => theme.colors.gray};
  `}
`;

type ButtonContentProps = {
  vague?: boolean;
};
