import * as i from 'types';
import * as React from 'react';
import { graphql } from 'gatsby';

import BorderBottom from 'images/border-bottom-grey.png';
import { scrollTo } from 'services';
import { Container } from 'common/layout';
import { Heading, Quote } from 'common/typography';

import { mapper } from './mapper';
import { Category } from './components';
import {
  GalleryContainer, ButtonContainer, GalleryItemsContainer, GalleryItem, BorderContainer, BottomBorder,
} from './styled';

export const Gallery: React.FC<GalleryProps> = ({
  items, openGalleryItem,
}) => {
  const [gallery, setGallery] = React.useState(items);
  const [category, setCategory] = React.useState<i.GalleryCategories>('*');

  React.useEffect(() => {
    let filteredGallery = items;

    if (category !== '*') {
      filteredGallery = filteredGallery.filter((item) => item.type === category);
    }

    setGallery(filteredGallery);
  }, [category]);

  return (
    <>
      <GalleryContainer id="gallery">
        <Container>
          <Heading as="h2">Media gallery</Heading>
          <ButtonContainer>
            <Category
              setCategory={setCategory}
              activeCategory={category}
              category={{ type: '*', text: 'All media' }}
            />
            <Category
              setCategory={setCategory}
              activeCategory={category}
              category={{ type: 'image', text: 'Images' }}
            />
            <Category
              setCategory={setCategory}
              activeCategory={category}
              category={{ type: 'video', text: 'Video' }}
            />
            <Category
              setCategory={setCategory}
              activeCategory={category}
              category={{ type: 'audio', text: 'Audio' }}
            />
          </ButtonContainer>
          <GalleryItemsContainer>
            {gallery.map((item) => {
              const MediaComponent = mapper(item.type);

              return (
                <GalleryItem key={item.id}>
                  <MediaComponent
                    {...item}
                    modalIsOpen={openGalleryItem === item.id}
                  />
                </GalleryItem>
              );
            })}
          </GalleryItemsContainer>
        </Container>
        <Quote onClick={() => scrollTo('#team')}>
          Meet the creators behind Seek
        </Quote>
      </GalleryContainer>
      <BorderContainer>
        <BottomBorder src={BorderBottom} alt="border bottom" />
      </BorderContainer>
    </>
  );
};

export const query = graphql`
  fragment GalleryItem on ContentfulGalleryItem {
    id
    name
    type
    thumbnail {
      title
      gatsbyImageData(
        width: 500,
        quality: 90,
      )
    }
    fullscreen {
      title
      gatsbyImageData(
        layout: FULL_WIDTH,
        quality: 90,
      )
    }
    embeddedMediaUrl
    showFullImage
  }
`;

type GalleryProps = {
  items: GatsbyTypes.GalleryItemFragment[];
  openGalleryItem?: string;
};
