export const mapSocials = (member: GatsbyTypes.TeamMemberFragment) => {
  const socials = [];

  if (member.email) {
    socials.push({ title: 'Email', url: `mailto:${member.email}` });
  }

  if (member.website) {
    socials.push({ title: 'Website', url: member.website });
  }

  if (member.linkedIn) {
    socials.push({ title: 'LinkedIn', url: member.linkedIn });
  }

  if (member.deviantArt) {
    socials.push({ title: 'Deviant Art', url: member.deviantArt });
  }

  if (member.instagram) {
    socials.push({ title: 'Instagram', url: member.instagram });
  }

  if (member.youtube) {
    socials.push({ title: 'YouTube', url: member.youtube });
  }

  if (member.soundcloud) {
    socials.push({ title: 'Soundcloud', url: member.soundcloud });
  }

  if (member.facebook) {
    socials.push({ title: 'Facebook', url: member.facebook });
  }

  return socials;
};
