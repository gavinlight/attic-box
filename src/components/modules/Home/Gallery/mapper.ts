import * as i from 'types';

import { Image, Video, Audio } from './components';

export const mapper = (type: i.GalleryItemTypes) => {
  switch (type) {
    case 'video':
      return Video;
    case 'audio':
      return Audio;
    default:
      return Image;
  }
};
