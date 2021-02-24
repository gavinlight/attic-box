import styled from 'styled-components';

import { media } from 'styles/utils';
import { Border } from 'common/layout';

export const MediaKitContainer = styled.div`
  padding: 30px 0 60px;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  margin-top: -80px;
  text-align: center;

  svg {
    margin: 20px 0;
  }

  ${media.mobile`
    padding-top: 56px;

    svg {
      margin: 0 0 40px;
    }
  `}

  ${media.tablet`
    padding: 100px 0 140px;
    margin-bottom: -100px
  `}
`;

export const BorderTop = styled(Border)`
  margin-top: -150px;
  transform: translateY(-55%) rotate(180deg);
  background-color: ${({ theme }) => theme.colors.gray.light};

  ${media.desktop`
    transform: translateY(-40%) rotate(180deg);
  `}
`;
