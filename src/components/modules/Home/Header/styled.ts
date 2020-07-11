import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-bottom: -25vh;
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  right: 0;
  min-width: 100%;
  min-height: calc(100% - 80px);
  z-index: -1;
`;

export const Content = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 20px;
  position: relative;
  z-index: 10;
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  & > a {
    margin-right: 38px;
  }
`;
