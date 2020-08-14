import styled, { css } from 'styled-components';

export const Button = styled.button<ButtonProps>`
  appearance: none;
  padding: 14px 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.crimson};
  color: ${({ theme }) => theme.colors.white.grey};
  transition: 300ms opacity;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: .8;
  }

  ${({ variant, theme }) => variant === 'secondary' && css`
    background-color: ${theme.colors.gray.button};
    color: ${theme.colors.gray.text};
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
`;

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  bold?: boolean;
  small?: boolean;
};
