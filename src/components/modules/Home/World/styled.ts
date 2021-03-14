import styled from 'styled-components';

import { media } from 'styles/utils';
import { Border } from 'common/layout';

export const UnderTheFoldBorder = styled(Border)`
  min-width: 700px;
  width: 120%;
  transform: translateY(85%);

  ${media.tablet`
    transform: translateY(70%);
  `}

  ${media.desktop`
    transform: translateY(55%);
  `}

  ${media.huge`
    transform: translateY(40%);
  `}
`;

export const WorldContainer = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 11;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  & > figure {
    max-width: 90%;
    width: 600px;
    margin: 40px auto 0;

    ${media.tablet`
      margin-top: 80px;
    `}
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  & figure {
    margin: 0 auto;

    &:last-child {
      display: none;
    }
  }

  & a {
    position: relative;
    top: 40px;
    margin-left: auto;
  }

  ${media.tablet`
    width: 50%;
    margin-right: 10%;

    & figure {
      margin: 0;

      &:last-child {
        display: block;
      }
    }
  `}
`;

export const Right = styled.div`
  & > p {
    margin-bottom: 45px;
  }

  ${media.tablet`
    width: 40%;

    & img {
      margin-top: 40px;
    }
  `}
`;

export const BottomBorder = styled(Border)`
  width: 120%;
  transform: translateY(60%);
  margin-top: -100px;
  z-index: -1;
`;

export const QuoteContainer = styled.div`
  margin-bottom: 100px;
`;
