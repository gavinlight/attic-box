import { Image, Video, Audio } from './components';

export const mapper = (type?: string) => {
  switch (type) {
    case 'video':
      return Video;
    case 'audio':
      return Audio;
    default:
      return Image;
  }
};
