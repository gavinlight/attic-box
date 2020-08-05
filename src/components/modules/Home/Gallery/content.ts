import * as i from 'types';

import GalleryHallwaySmall from 'images/media/gallery/gallery-hallway-small.jpg';
import GalleryHallway from 'images/media/gallery/gallery-hallway.jpg';

import GalleryEntranceSmall from 'images/media/gallery/gallery-entrance-small.jpg';
import GalleryEntrance from 'images/media/gallery/gallery-entrance.jpg';

import GalleryGatekeeperSmall from 'images/media/gallery/gallery-gatekeeper-small.jpg';
import GalleryGatekeeper from 'images/media/gallery/gallery-gatekeeper.jpg';

import GalleryPassageSmall from 'images/media/gallery/gallery-passage-small.jpg';
import GalleryPassage from 'images/media/gallery/gallery-passage.jpg';

import GalleryQuarrySmall from 'images/media/gallery/gallery-quarry-small.jpg';
import GalleryQuarry from 'images/media/gallery/gallery-quarry.jpg';

export const GalleryContent: GalleryContentType[] = [
  {
    id: 0,
    url: 'https://www.youtube.com/embed/QNaLUWtDwV8?rel=0&controls=0&showinfo=0',
    type: 'video',
  },
  {
    id: 1,
    url: GalleryHallwaySmall,
    fullscreenUrl: GalleryHallway,
    text: 'Etherwood Outpost: Hallway',
    type: 'image',
  },
  {
    id: 2,
    url: GalleryEntranceSmall,
    fullscreenUrl: GalleryEntrance,
    text: 'Etherwood Outpost: Entrance',
    type: 'image',
  },
  {
    id: 3,
    url: GalleryGatekeeperSmall,
    fullscreenUrl: GalleryGatekeeper,
    text: 'Etherwood Outpost: Gatekeeper House',
    type: 'image',
  },
  {
    id: 4,
    url: GalleryPassageSmall,
    fullscreenUrl: GalleryPassage,
    text: 'Deepridge Mine: Passage',
    type: 'image',
  },
  {
    id: 5,
    url: GalleryQuarrySmall,
    fullscreenUrl: GalleryQuarry,
    text: 'Deepridge Mine: Quarry',
    type: 'image',
  },
  {
    id: 6,
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163109453&color=d14b4b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false',
    type: 'audio',
  },
];

type GalleryContentType = {
  id: number;
  url: string;
  text?: string;
  fullscreenUrl?: string;
  type: i.GalleryItemTypes;
};
