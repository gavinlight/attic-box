export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type GalleryItemTypes = 'video' | 'audio' |  'image';
export type GalleryCategories = GalleryItemTypes | '*';

export type ContentType = Record<string, string>;

export type RichText = {
  raw: string;
};
