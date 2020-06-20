import * as React from 'react';
import styled from 'styled-components';

import FeatherSvg from 'vectors/feather-big.svg';

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px 0 0;
`;

const BlockQuote = styled.blockquote`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white.off};
  margin: 0 0 10px;
`;

export const Quote: React.FC = ({ children }) => (
  <QuoteContainer>
    <BlockQuote>{children}</BlockQuote>
    <FeatherSvg />
  </QuoteContainer>
);
