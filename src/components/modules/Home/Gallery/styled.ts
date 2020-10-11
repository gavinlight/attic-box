import styled from 'styled-components';

import { media } from 'styles/utils';

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
    width: 125px;
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

export const BottomBorder = styled.img`
  width: 120%;
  height: auto;
  margin-top: -150px;
  transform: translateY(40%);
  background-color: ${({ theme }) => theme.colors.gray.light};
  object-fit: fill;

  ${media.mobile`
    transform: translateY(60%);
  `}

  ${media.huge`
    transform: translateY(50%);
  `}
`;
