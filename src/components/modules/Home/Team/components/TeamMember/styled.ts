import styled, { css } from 'styled-components';

import { media } from 'styles/utils';
import CloseSvg from 'vectors/close.svg';
import ModalCardBorderSvg from 'vectors/modal-card-border.svg?external';

export const TeamMemberContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray.dark};

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
  line-height: 15px;
  margin: 10px 0 2px;
`;

export const MemberFunction = styled.p`
  font-style: italic;
`;

export const ModalCard = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 60px;
  transform: translate(-50%, -50%);
  max-width: 1040px;
  width: 90%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  background-image: url(${ModalCardBorderSvg});
  background-repeat: no-repeat;

  ${MemberName} {
    margin: 60px 0 0;
    font-size: 50px;
    line-height: 100%;
  }

  ${MemberFunction} {
    margin: 0 0 40px;
    font-size: 25px;
    font-weight: 300;
  }
`;

export const ModalColumn = styled.div<ModalColumnProps>`
  width: 50%;
  display: inline-block;

  ${({ left }) => left && css`
    width: 35%;
    margin-right: 10%;
  `}

  ${({ right }) => right && css`
    width: 55%;
  `}
`;

type ModalColumnProps = {
  left?: boolean;
  right?: boolean;
};

export const ModalClose = styled(CloseSvg)`
  position: absolute;
  right: 60px;
  top: 60px;
  width: 30px;
  cursor: pointer;
`;

export const MemberImage = styled.img`
  border: 12px solid ${({ theme }) => theme.colors.white};
  width: 100%;
  height: auto;
  margin-bottom: 32px;
`;

export const MemberContent = styled.p`
  font-size: 18px;
  letter-spacing: -.2px;
`;

export const MemberLink = styled.a.attrs({
  target: '_blank',
})`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 2px;
  text-decoration: none;
  font-size: 18px;
  letter-spacing: -.2px;
  border-bottom: 2px solid transparent;
  transition: 300ms border-bottom-color;
  
  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.white};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
