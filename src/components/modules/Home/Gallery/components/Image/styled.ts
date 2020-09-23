import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const ImageButton = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const ModalImage = styled.div<ModalImageType>`
  height: calc(100% - 50px);
  width: auto;
  margin: 0 auto;
  display: block;

  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  ${media.tablet<ModalImageType>`
    background-size: cover;

    ${({ showFullImage }) => showFullImage && css`
      background-size: contain;
    `}
  `}
`;

type ModalImageType = {
  image: string;
  showFullImage: boolean;
};

export const ModalText = styled.p`
  color: ${({ theme }) => theme.colors.white.off};
  font-style: italic;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
`;
