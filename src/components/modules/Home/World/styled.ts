import styled from 'styled-components';

export const UnderTheFoldBorder = styled.img`
  width: 120%;
  height: auto;
  transform: translateY(60%);
`;

export const WorldContainer = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  width: 95%;
  justify-content: center;
  margin: 0 auto;
`;

export const Left = styled.div`
  width: 55%;
  margin-right: 5%;
`;

export const Right = styled.div`
  width: 40%;

  & img {
    margin-top: 40px;
  }
`;
