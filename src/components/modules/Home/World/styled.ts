import styled from 'styled-components';

import { Quote } from 'common/typography';

export const UnderTheFoldBorder = styled.img`
  width: 120%;
  height: auto;
  transform: translateY(60%);
`;

export const WorldContainer = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 11;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Left = styled.div`
  width: 50%;
  margin-right: 10%;
`;

export const Right = styled.div`
  width: 40%;

  & img {
    margin-top: 40px;
  }
`;

export const BottomBorder = styled.img`
  width: 120%;
  height: auto;
  transform: translateY(60%);
  margin-top: -100px;
  z-index: -1;
  position: relative;
`;

export const QuoteContainer = styled.div`
  margin-bottom: 100px;
`;
