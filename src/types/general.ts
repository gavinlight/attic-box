import * as i from 'types';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type OnClick<Element, ReturnType = void> = (
  event: React.MouseEvent<Element, MouseEvent>,
) => ReturnType;

export type PartialRecord<K extends keyof unknown, T> = {
  [P in K]?: T;
};

export type GalleryItemTypes = 'video' | 'audio' | 'image';
export type GalleryCategories = i.GalleryItemTypes | '*';

export type ContentType = Record<string, string>;

export type RichText = {
  raw: string;
};

export type ContentfulImage = {
  title?: string;
  gatsbyImageData?: IGatsbyImageData;
};
