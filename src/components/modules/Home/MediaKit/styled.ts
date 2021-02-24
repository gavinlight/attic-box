import styled from 'styled-components';

import { media } from 'styles/utils';
import { Border } from 'common/layout';

export const MediaKitContainer = styled.div`
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  margin-top: -80px;
  text-align: center;

  svg {
    margin: 20px 0;

    ${media.mobile`
      margin-bottom: 40px;
    `}

    ${media.desktop`
      margin-top: 0;
    `}
  }

  ${media.tablet`
    padding: 100px 0 140px;
  `}
`;

export const BorderContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray.light};
  transform: translateY(-40%);

  ${media.tablet`
    margin-top: -145px;
  `}

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`;

export const BorderTop = styled(Border)`
  transform: rotate(180deg);
`;
