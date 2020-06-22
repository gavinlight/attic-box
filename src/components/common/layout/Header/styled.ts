import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 20;
  padding: 20px 24px;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black.opacity};
`;

export const AtticBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;

  & svg {
    margin-right: 20px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 20px;
  cursor: pointer;
  transition: 300ms opacity;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: .8;
  }
`;
