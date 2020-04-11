import styled, { css } from 'styled-components';

export const Button = styled.button<ButtonProps>`
  appearance: none;
  padding: 8px 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.crimson};
  color: ${({ theme }) => theme.colors.white};
  transition: 300ms opacity;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }

  ${({ variant }) => variant === 'secondary' && css`
    background-color: #161616;
    color: #A5A5A5;
  `};

  ${({ bold }) => bold && css`
    font-weight: 700;
    padding-bottom: 2px;
  `}
`;

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  bold?: boolean;
};
