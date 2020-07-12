export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type GalleryItemTypes = 'video' | 'audio' |  'image';
export type GalleryCategories = GalleryItemTypes | '*';
