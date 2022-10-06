import styled from 'styled-components';

export const DiscordPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.discord};

  & svg {
    width: 500px;
    max-width: 90%;
    height: auto;
  }
`;

export const RedirectText = styled.p`
  font-size: 1.5em;
  margin: 1.5em 10px 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
