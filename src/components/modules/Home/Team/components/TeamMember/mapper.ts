import * as i from 'types';

export const mapper = (type: i.TeamMemberSocialMediaTypes) => {
  switch (type) {
    case 'deviantArt':
      return 'DeviantArt';
    case 'email':
      return 'Email';
    case 'facebook':
      return 'Facebook';
    case 'instagram':
      return 'Instagram';
    case 'linkedIn':
      return 'LinkedIn';
    case 'soundcloud':
      return 'Soundcloud';
    case 'website':
      return 'Website';
    case 'youtube':
      return 'Youtube';
    default:
      return 'Email';
  }
};
