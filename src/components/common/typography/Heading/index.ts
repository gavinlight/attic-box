import styled, { css } from 'styled-components';

export const Heading = styled.h1<HeadingProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 72px;
  margin: 0 0 20px;
  letter-spacing: .21px;
  color: ${({ theme }) => theme.colors.white.off};
  text-shadow: 1px 2px 1px rgba(0, 0, 0, .3);
  text-transform: uppercase;
  font-weight: 600;

  ${({ as }) => as === 'h2' && css`
    font-size: 28px;
  `}

  ${({ align }) => align && css`
    align-items: ${align};
  `}

  ${({ clickAble }) => clickAble && css`
    text-transform: none;
    text-decoration: underline;
    cursor: pointer;
  `}

  a {
    color: inherit;
  }
`;

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'flex-start' | 'center' | 'flex-end';
  clickAble?: boolean;
};
