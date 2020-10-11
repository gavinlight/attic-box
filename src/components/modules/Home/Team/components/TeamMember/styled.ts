import styled from 'styled-components';

import { media } from 'styles/utils';

export const TeamMemberContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  & img {
    width: 100%;
    height: auto;
    border: 8px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    width: 28%;
    margin-right: 8%;
    margin-bottom: 0;
    margin-top: -40px;

    &:nth-child(3n + 2) {
      margin-top: 120px;
    }

    &:nth-child(1), &:nth-child(3) {
      margin-top: 0;
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
