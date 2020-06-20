import styled, { css } from 'styled-components';

export const Heading = styled.h1<HeadingProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 72px;
  font-weight: 400;
  margin: 0 0 20px;
  letter-spacing: .21px;
  color: ${({ theme }) => theme.colors.white.off};
  text-shadow: 1px 2px 1px rgba(0, 0, 0, .3);
  text-transform: uppercase;

  ${({ as }) => as === 'h2' && css`
    font-size: 24px;
    margin-bottom: 10px;
  `}

  ${({ align }) => align && css`
    align-items: ${align};
  `}
`;

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'flex-start' | 'center' | 'flex-end';
};
