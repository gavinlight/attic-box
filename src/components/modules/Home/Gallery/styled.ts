import styled from 'styled-components';

import { media } from 'styles/utils';
import { Border } from 'common/layout';

export const GalleryContainer = styled.div`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  position: relative;
  z-index: 10;

  ${media.tablet`
    padding-top: 175px;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & button {
    margin-bottom: 10px;
    width: 135px;
    height: 54px;
  }

  ${media.tablet`
    flex-direction: row;

    & button {
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;

export const GalleryItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  ${media.tablet`
    margin-top: 50px;
  `}
`;

export const GalleryItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
  min-height: 235px;

  & img {
    width: 100%;
    height: auto;
  }

  ${media.tablet`
    width: 31%;
    margin-right: 3.5%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  `}
`;

export const BorderContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray.light};

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`;


export const BottomBorder = styled(Border)`
  width: 120%;
`;
