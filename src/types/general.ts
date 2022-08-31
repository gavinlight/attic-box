import * as i from 'types';

export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type GalleryItemTypes = 'video' | 'audio' |  'image';
export type GalleryCategories = GalleryItemTypes | '*';

export type TeamMemberSocialMediaTypes = 'email' | 'website' | 'linkedIn' | 'instagram' | 'facebook' | 'soundcloud' | 'mixcloud' | 'youtube' | 'deviantArt' | 'twitter' | 'artstation';

export type TeamMemberType = {
  id: number;
  image: string;
  name: string;
  function: string;
  content: string;
  urls?: i.PartialRecord<i.TeamMemberSocialMediaTypes, string>;
};

export type Devlog = {
  link?: string;
  hero?: string;
  introduction?: string;
  number?: number;
  thumbnail?: string;
  time?: string;
};

export type DevlogArchive = Record<string, i.Devlog>;

export type ContentType = Record<string, string>;
