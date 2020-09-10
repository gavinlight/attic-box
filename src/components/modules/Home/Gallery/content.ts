import * as i from 'types';

import GalleryConceptSmall from 'images/media/gallery/gallery-concept-art-small.jpg';
import GalleryConcept from 'images/media/gallery/gallery-concept-art.jpg';

import GalleryWellSmall from 'images/media/gallery/gallery-well-small.jpg';
import GalleryWell from 'images/media/gallery/gallery-well.jpg';

import GalleryFishingSpotSmall from 'images/media/gallery/gallery-fishing-spot-small.jpg';
import GalleryFishingSpot from 'images/media/gallery/gallery-fishing-spot.jpg';

import GalleryMineEntranceSmall from 'images/media/gallery/gallery-mine-entrance-small.jpg';
import GalleryMineEntrance from 'images/media/gallery/gallery-mine-entrance.jpg';

import GalleryMarketplaceSmall from 'images/media/gallery/gallery-marketplace-small.jpg';
import GalleryMarketplace from 'images/media/gallery/gallery-marketplace.jpg';

import GalleryDungeonSmall from 'images/media/gallery/gallery-dungeon-small.jpg';
import GalleryDungeon from 'images/media/gallery/gallery-dungeon.jpg';

import GalleryLighthouseSmall from 'images/media/gallery/gallery-lighthouse-small.jpg';
import GalleryLighthouse from 'images/media/gallery/gallery-lighthouse.jpg';

import GalleryMansionSmall from 'images/media/gallery/gallery-mansion-small.jpg';
import GalleryMansion from 'images/media/gallery/gallery-mansion.jpg';

import GalleryCaveSmall from 'images/media/gallery/gallery-cave-small.jpg';
import GalleryCave from 'images/media/gallery/gallery-cave.jpg';

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
    url: GalleryConceptSmall,
    fullscreenUrl: GalleryConcept,
    text: 'Character concept art',
    type: 'image',
    showFullImage: true,
  },
  {
    id: 2,
    url: GalleryWellSmall,
    fullscreenUrl: GalleryWell,
    text: 'Deepridge Falls: The well',
    type: 'image',
  },
  {
    id: 3,
    url: GalleryFishingSpotSmall,
    fullscreenUrl: GalleryFishingSpot,
    text: 'Deepridge Falls: The fishing spot',
    type: 'image',
  },
  {
    id: 4,
    url: GalleryMineEntranceSmall,
    fullscreenUrl: GalleryMineEntrance,
    text: 'Etherwood Forest: Mine entrance',
    type: 'image',
  },
  {
    id: 5,
    url: GalleryMarketplaceSmall,
    fullscreenUrl: GalleryMarketplace,
    text: 'Etherwood Outpost: Marketplace',
    type: 'image',
  },
  {
    id: 6,
    url: GalleryDungeonSmall,
    fullscreenUrl: GalleryDungeon,
    text: 'Moraine Mansion: Dungeon',
    type: 'image',
  },
  {
    id: 7,
    url: GalleryLighthouseSmall,
    fullscreenUrl: GalleryLighthouse,
    text: 'Mistlight Shore: Lighthouse',
    type: 'image',
  },
  {
    id: 8,
    url: GalleryMansionSmall,
    fullscreenUrl: GalleryMansion,
    text: 'Mistlight Shore: Moraine Mansion',
    type: 'image',
  },
  {
    id: 9,
    url: GalleryCaveSmall,
    fullscreenUrl: GalleryCave,
    text: 'Limestone Cave',
    type: 'image',
  },
  {
    id: 10,
    url: GalleryHallwaySmall,
    fullscreenUrl: GalleryHallway,
    text: 'Etherwood Outpost: Hallway',
    type: 'image',
  },
  {
    id: 11,
    url: GalleryEntranceSmall,
    fullscreenUrl: GalleryEntrance,
    text: 'Etherwood Outpost: Entrance',
    type: 'image',
  },
  {
    id: 12,
    url: GalleryGatekeeperSmall,
    fullscreenUrl: GalleryGatekeeper,
    text: 'Etherwood Outpost: Gatekeeper House',
    type: 'image',
  },
  {
    id: 13,
    url: GalleryPassageSmall,
    fullscreenUrl: GalleryPassage,
    text: 'Deepridge Mine: Passage',
    type: 'image',
  },
  {
    id: 14,
    url: GalleryQuarrySmall,
    fullscreenUrl: GalleryQuarry,
    text: 'Deepridge Mine: Quarry',
    type: 'image',
  },
  {
    id: 15,
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163109453&color=d14b4b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false',
    type: 'audio',
  },
];

type GalleryContentType = {
  id: number;
  url: string;
  text?: string;
  fullscreenUrl?: string;
  showFullImage?: boolean;
  type: i.GalleryItemTypes;
};
