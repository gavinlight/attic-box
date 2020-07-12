import * as React from 'react';
import styled from 'styled-components';
import { useScrollPercentage } from 'react-scroll-percentage';

import FeatherSvg from 'vectors/feather-big.svg';
import { media } from 'styles/utils';

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px 0 0;
  transition: 300ms opacity;
`;

const BlockQuote = styled.blockquote`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white.off};
  margin: 0 0 10px;
  text-align: center;

  ${media.tablet`

  `}
`;

export const Quote: React.FC = ({ children }) => {
  const [ref, percentage] = useScrollPercentage();

  return (
    <QuoteContainer
      ref={ref}
      style={{ opacity: (1 - percentage) - .1 }}
    >
      <BlockQuote>
        {children}
      </BlockQuote>
      <FeatherSvg />
    </QuoteContainer>
  );
};
