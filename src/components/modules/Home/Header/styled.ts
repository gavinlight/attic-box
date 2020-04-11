import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  z-index: -1;
`;

export const Content = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Tagline = styled.p`
  text-transform: uppercase;
  font-size: 24px;
  background: linear-gradient(${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.gray});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 26px;

  & > button:first-child {
    margin-right: 38px;
  }
`;
