import styled, { css } from 'styled-components';

export const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.white.off};
  font-size: ${({ size }) => size || 16}px;
  font-style: ${({ $style }) => $style || 'normal'};
  margin: ${({ margin }) => margin || '0px'};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};

  ${({ shrinkText }) => shrinkText && css`
    letter-spacing: -.2px;
  `};

  ${({ $align }) => $align && css`
    text-align: ${$align};
  `};

  ${({ variant }) => variant === 'white' && css`
    color: ${({ theme }) => theme.colors.white};
  `};
`;

type TextProps = {
  variant?: 'default' | 'white';
  margin?: string;
  size?: number;
  $align?: 'left' | 'center' | 'right';
  $style?: 'italic' | 'normal';
  lineHeight?: string;
  shrinkText?: boolean;
};
