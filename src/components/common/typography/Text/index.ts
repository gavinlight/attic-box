import styled from 'styled-components';

export const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.white.off};
  font-size: ${({ size }) => size || 16}px;
  font-style: ${({ $style }) => $style || 'normal'};
  margin: ${({ margin }) => margin || '0px'};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
`;

type TextProps = {
  margin?: string;
  size?: number;
  $style?: 'italic' | 'normal';
  lineHeight?: string;
};
