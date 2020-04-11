import styled, { css } from 'styled-components';

export const Button = styled.button<ButtonProps>`
  appearance: none;
  padding: 14px 40px;
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

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  bold?: boolean;
  small?: boolean;
};
