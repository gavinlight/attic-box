import * as React from 'react';

import GalleryMarket from 'images/media/gallery/gallery-market.jpg';
import GalleryMine from 'images/media/gallery/gallery-mine.jpg';
import GalleryOutpost from 'images/media/gallery/gallery-outpost.jpg';
import BorderBottom from 'images/border-bottom-grey.png';

import { Container, QuoteImage } from 'common/layout';
import { Button } from 'common/interaction';
import { Heading, Quote } from 'common/typography';

import { GalleryContainer, ButtonContainer, GalleryItemsContainer, GalleryItem, BottomBorder } from './styled';

export const Gallery: React.FC = () => (
  <>
    <GalleryContainer>
      <Container>
        <Heading as="h2">Media gallery</Heading>
        <ButtonContainer>
          <Button small bold>All media</Button>
          <Button small variant="secondary">Images</Button>
          <Button small variant="secondary">Video</Button>
          <Button small variant="secondary">Audio</Button>
        </ButtonContainer>
        <GalleryItemsContainer>
          <GalleryItem>
            <QuoteImage
              src={GalleryMarket}
              text="Etherwood station: Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryMine}
              text="Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryOutpost}
              text="Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryMine}
              text="Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryOutpost}
              text="Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryMarket}
              text="Etherwood station: Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryOutpost}
              text="Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryMine}
              text="Market"
              big
            />
          </GalleryItem>
          <GalleryItem>
            <QuoteImage
              src={GalleryMarket}
              text="Etherwood station: Market"
              big
            />
          </GalleryItem>
        </GalleryItemsContainer>
      </Container>
      <Quote>Meet the creators behind Seek</Quote>
    </GalleryContainer>
    <BottomBorder src={BorderBottom} alt="border bottom" />
  </>
);
