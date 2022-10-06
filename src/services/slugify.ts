export const slugify = (name: string) => name.toLowerCase().replace(/ /g, '-').replace(':', '');
