import styled from 'styled-components';

export const UnderTheFoldBorder = styled.img`
  width: 100%;
  height: auto;
  transform: translateY(50%);
`;

export const WorldContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;
