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
            World of Seek: Light Through Darkness
          </Heading>
          <Text>
            A small gust of wind flew across Damien’s face, as he gazed through the forest finding no signs of life. He was standing on a small grassy road in the middle of the night. Small lantern posts were spread across both sides of the road, with trees surrounding the whole area. "Is this the right way?" Damien thought to himself, as he wandered into the darkness.
            <br /><br />
            In the age of Enlightenment, Damien, husband and father, is returning to his home village of Blackmill after receiving a letter from his wife. Upon arrival he discovers that everything seems abandoned. Fearing for his family he enters the village and searches for clues of the events that have occurred there.
            <br /><br />
            <i>Seek: Light Through Darkness is an indie survival horror game played from a first-person perspective. A game inpired by titles such as Amnesia, Outlast, Skyrim and Cry of Fear, where exploring environments and avoiding monsters is key. The game is developed in Unreal Engine, and is currently only available for Windows.</i>
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
