import React from 'react';

import BorderBottom from 'images/border-top-black.png';

import { UnderTheFoldBorder, WorldContainer } from './styled';

export const World: React.FC = () => (
  <>
    <UnderTheFoldBorder src={BorderBottom} alt="border bottom" />
    <WorldContainer />
    {/* <Container>
      <Left></Left>
      <Right>
        <Heading as="h2">
          World of seek
        </Heading>
        <Text>
          Damien, husband and father, is returning to his home village of Blackmill after receiving a distressing letter from his wife.
          &nbsp;&nbsp;
          A small gust of wind flew across Damien’s face, he gazed on the outpost but found no signs of life.&nbsp;
          “What on earth happened here?” Damien said to himself, as he looked around. He was standing on a small grassy road in the middle of the night. Small lantern posts were spread across both sides of the road, where trees surrounded the whole area.
          &nbsp;&nbsp;
          Upon arrival he discovers that everything seems abandoned. Fearing for his family he enters the estabishment and searches for clues of the events that have occurred there.
        </Text>
      </Right>
    </Container> */}
  </>
);
