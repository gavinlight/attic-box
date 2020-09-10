import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  width: 90%;
  justify-content: center;
  margin: 0 auto;

  ${({ direction }) => direction === 'row' && css`
    flex-direction: column;

    ${media.tablet`
      flex-direction: row;
    `}
  `}
`;

type ContainerProps = {
  direction?: 'column' | 'row';
};
