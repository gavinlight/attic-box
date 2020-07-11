import styled from 'styled-components';

export const TeamContainer = styled.div`
  padding: 200px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
  margin-top: -40px;
  margin-bottom: -100px
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  margin: 80px auto 0;
  font-style: italic;
  width: 500px;
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: 30px;
  font-size: 18px;
`;

export const TeamHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.dark};
  text-transform: uppercase;
  position: relative;
  top: 80px;
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 750px;
  width: 95%;
`;

export const TeamMember = styled.div`
  width: 28%;
  margin-right: 8%;

  &:nth-child(3n + 2) {
    margin-top: 80px;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  & img {
    width: 100%;
    height: auto;
    border: 8px solid ${({ theme }) => theme.colors.white};
  }
`;

export const MemberName = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: 15px;
  margin: 10px 0 2px;
`;

export const MemberFunction = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.gray.dark};
`;
