import styled from 'styled-components';

import { media } from 'styles/utils';

export const TeamContainer = styled.div`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
  margin-top: -40px;

  ${media.tablet`
    padding: 200px 0;
    margin-bottom: -100px
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    & svg {

    }
  `}
`;

export const Text = styled.p`
  margin: 30px auto 0;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gray.dark};
  line-height: 30px;
  font-size: 18px;

  ${media.tablet`
    margin-top: 80px;
    width: 500px;
  `}
`;

export const TeamHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.dark};
  text-transform: uppercase;
  margin-top: 20px;

  ${media.tablet`
    margin-top: 0;
    position: relative;
    top: 80px;
  `}
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 750px;
  width: 95%;

  ${media.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

export const TeamMember = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  & img {
    width: 100%;
    height: auto;
    border: 8px solid ${({ theme }) => theme.colors.white};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    width: 28%;
    margin-right: 8%;
    margin-bottom: 0;

    &:nth-child(3n + 2) {
      margin-top: 80px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  `}
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
