import React from 'react';

import BorderBottom from 'images/border-top-black.png';
import BorderBottom2 from 'images/border-bottom-black-2.png';
import DeepRidgeMineImage from 'images/media/world-deepridge-mine.jpg';
import EtherWoodStationImage from 'images/media/world-etherwood-station.jpg';
import MineImage from 'images/media/world-mine.jpg';

import { QuoteImage, Container } from 'common/layout';
import { Heading, Text, Quote } from 'common/typography';

import { UnderTheFoldBorder, WorldContainer, Left, Right, BottomBorder, QuoteContainer } from './styled';

export const World: React.FC = () => (
  <>
    <UnderTheFoldBorder src={BorderBottom} alt="border bottom" />
    <WorldContainer id="world">
      <Container direction="row">
        <Left>
          <QuoteImage src={DeepRidgeMineImage} text="Deep Ridge Mine" width="80%" />
          <QuoteImage src={EtherWoodStationImage} text="Etherwood Station: Main Halls" />
        </Left>
        <Right>
          <Heading as="h2" align="flex-start">
          World of seek
          </Heading>
          <Text>
            Damien, husband and father, is returning to his home village of Blackmill after receiving a distressing letter from his wife.
            <br /><br />
            A small gust of wind flew across Damien’s face, he gazed on the outpost but found no signs of life.&nbsp;
            “What on earth happened here?” Damien said to himself, as he looked around. He was standing on a small grassy road in the middle of the night. Small lantern posts were spread across both sides of the road, where trees surrounded the whole area.
            <br /><br />
            Upon arrival he discovers that everything seems abandoned. Fearing for his family he enters the estabishment and searches for clues of the events that have occurred there.
          </Text>
          <QuoteImage src={MineImage} text="Etherwood Station: Market" />
        </Right>
      </Container>
      <QuoteContainer>
        <Quote>Step into the world of Seek</Quote>
      </QuoteContainer>
      <BottomBorder src={BorderBottom2} alt="border bottom" />
    </WorldContainer>
  </>
);
