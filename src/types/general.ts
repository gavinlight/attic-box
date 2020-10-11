export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type GalleryItemTypes = 'video' | 'audio' |  'image';
export type GalleryCategories = GalleryItemTypes | '*';

export type TeamMemberType = {
  id: number;
  image: string;
  name: string;
  function: string;
};
