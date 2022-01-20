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
  overflow-y: auto;
  position: absolute;
  transform: none;
  max-width: 1040px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray.dark};
  background-image: url(${ModalCardBorderSvg});
  background-repeat: no-repeat;
  box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.5);

  ${MemberName} {
    margin: 0;
    font-size: 25px;
    line-height: 100%;

    ${media.tablet`
      font-size: 50px;
      margin-top: 60px;
    `}
  }

  ${MemberFunction} {
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 300;

    ${media.tablet`
      font-size: 25px;
      margin-bottom: 40px;
    `}
  }

  ${media.tablet`
    max-height: 95%;
    left: 5%;
    width: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const ModalScroll = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 40px 40px 35px;

  ${media.tablet`
    padding: 60px;
    flex-direction: row;
  `}
`;

export const ModalColumn = styled.div<ModalColumnProps>`
  ${media.tablet<ModalColumnProps>`
    width: 50%;
    display: inline-block;

    ${({ left }) => left && css`
      width: 35%;
      margin-right: 10%;
    `}

    ${({ right }) => right && css`
      width: 55%;
    `}
  `}
`;

type ModalColumnProps = {
  left?: boolean;
  right?: boolean;
};

export const ModalClose = styled(CloseSvg)`
  position: fixed;
  right: calc(5% - 20px + 40px);
  top: calc(12.5% + 25px);
  transform: scale(0.75);
  width: 34px;
  cursor: pointer;
  z-index: 10;

  ${media.tablet`
    position: absolute;
    right: 60px;
    top: 60px;
    transform: scale(1);
  `}
`;

export const MemberImage = styled.img`
  display: block;
  border: 6px solid ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 200px;
  margin: 32px auto;
  height: auto;

  ${media.tablet`
    max-width: 100%;
    margin: 0 0 32px;
    border-width: 12px;
  `}
`;

export const MemberContent = styled.p`
  font-size: 18px;
  letter-spacing: -.2px;
`;

export const MemberLinks = styled.div<MemberLinksProps>`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;

  ${({ wrap }) => wrap && css`
    text-align: left;
    justify-content: left;
  `}
`;

type MemberLinksProps = {
  wrap: boolean;
};

export const MemberLink = styled.a.attrs({
  target: '_blank',
})`
  width: 33.33%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  margin-bottom: 5px;

  &:nth-child(3n) {
    padding-right: 0;
  }
`;
