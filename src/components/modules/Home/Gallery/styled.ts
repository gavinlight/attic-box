import styled from 'styled-components';

export const GalleryContainer = styled.div`
  padding: 175px 0 80px;
  background-color: ${({ theme }) => theme.colors.gray.dark};
  position: relative;
  z-index: 10;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;

  & button {
    margin-right: 15px;
    width: 125px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const GalleryItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const GalleryItem = styled.div`
  width: 31%;
  margin-right: 3.5%;

  &:nth-child(3n) {
    margin-right: 0;
  }

  & img {
    width: 100%;
    height: auto;
  }
`;

export const BottomBorder = styled.img`
  width: 120%;
  height: auto;
  transform: translateY(60%);
  margin-top: -150px;
`;
