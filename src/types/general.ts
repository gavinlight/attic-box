import * as i from 'types';

export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type GalleryItemTypes = 'video' | 'audio' |  'image';
export type GalleryCategories = GalleryItemTypes | '*';

type TeamMemberUrlType = string | string[];
type TeamMemberSocialMediaTypes = 'email' | 'website' | 'linkedIn' | 'instagram' | 'facebook' | 'soundcloud' | 'mixcloud' | 'youtube' | 'deviantArt';

export type TeamMemberType = {
  id: number;
  image: string;
  name: string;
  function: string;
  content: string;
  urls?: i.PartialRecord<TeamMemberSocialMediaTypes, TeamMemberUrlType>;
};
