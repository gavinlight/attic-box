import * as i from 'types';

import GalleryMarket from 'images/media/gallery/gallery-market.jpg';
import GalleryMine from 'images/media/gallery/gallery-mine.jpg';
import GalleryOutpost from 'images/media/gallery/gallery-outpost.jpg';

export const GalleryContent: GalleryContentType[] = [
  {
    id: 1,
    url: GalleryMarket,
    text: 'Etherwood station: Market',
    type: 'image',
  },
  {
    id: 2,
    url: GalleryMine,
    text: 'Mine',
    type: 'image',
  },
  {
    id: 3,
    url: GalleryOutpost,
    text: 'Outpost',
    type: 'image',
  },
  {
    id: 4,
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163109453&color=d14b4b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false',
    type: 'audio',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/QNaLUWtDwV8?rel=0&controls=0&showinfo=0',
    type: 'video',
  },
];

type GalleryContentType = {
  id: number;
  url: string;
  text?: string;
  type: i.GalleryItemTypes;
};
