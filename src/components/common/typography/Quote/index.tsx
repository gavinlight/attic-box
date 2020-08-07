import * as React from 'react';
import styled, { css } from 'styled-components';
import { useScrollPercentage } from 'react-scroll-percentage';

import FeatherSvg from 'vectors/feather-big.svg';

const QuoteContainer = styled.div<QuoteContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px 0 0;
  transition: 300ms opacity;

  ${({ canClick }) => canClick && css`
    cursor: pointer;
  `}
`;

type QuoteContainerProps = {
  canClick: boolean;
};

const BlockQuote = styled.blockquote`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white.off};
  margin: 0 0 10px;
  text-align: center;
`;

export const Quote: React.FC<QuoteProps> = ({ onClick, children }) => {
  const [ref, percentage] = useScrollPercentage();

  return (
    <QuoteContainer
      ref={ref}
      style={{ opacity: (1 - percentage) - .1 }}
      // @ts-ignore
      onClick={() => onClick && onClick()}
      canClick={Boolean(onClick)}
    >
      <BlockQuote>
        {children}
      </BlockQuote>
      <FeatherSvg />
    </QuoteContainer>
  );
};

type QuoteProps = {
  onClick?: () => void;
};
