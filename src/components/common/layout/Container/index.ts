import styled from 'styled-components';

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  max-width: 1080px;
  width: 95%;
  justify-content: center;
  margin: 0 auto;
`;

type ContainerProps = {
  direction?: 'column' | 'row';
};
