import styled from 'styled-components';

export const SimplePage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.gray.dark};

  & svg {
    margin-bottom: 60px;

    g {
      stroke: ${({ theme }) => theme.colors.white.off};
    }
  }
`;
