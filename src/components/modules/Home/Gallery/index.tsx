import * as i from 'types';
import * as React from 'react';

import BorderBottom from 'images/border-bottom-grey.png';

import { Container } from 'common/layout';
import { Heading, Quote } from 'common/typography';

import { GalleryContent } from './content';
import { mapper } from './mapper';
import { Category } from './components';
import { GalleryContainer, ButtonContainer, GalleryItemsContainer, GalleryItem, BottomBorder } from './styled';

export const Gallery: React.FC = () => {
  const [gallery, setGallery] = React.useState(GalleryContent);
  const [category, setCategory] = React.useState<i.GalleryCategories>('*');

  React.useEffect(() => {
    let filteredGallery = GalleryContent;

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
              const { id, url, type, ...itemProps } = item;
              const MediaComponent = mapper(type);

              return (
                <GalleryItem key={item.id}>
                  <MediaComponent url={url} {...itemProps} />
                </GalleryItem>
              );
            })}
          </GalleryItemsContainer>
        </Container>
        <Quote>Meet the creators behind Seek</Quote>
      </GalleryContainer>
      <BottomBorder src={BorderBottom} alt="border bottom" />
    </>
  );
};
