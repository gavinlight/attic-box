import * as i from 'types';
import React from 'react';

import { Button } from 'common/interaction';

export const Category: React.FC<CategoryProps> = ({
  setCategory,
  activeCategory,
  category,
}) => {
  const active = activeCategory === category.type;

  return (
    <Button
      small
      bold
      vague={!active}
      variant={active ? 'primary' : 'secondary'}
      onClick={() => setCategory(category.type)}
    >
      {category.text}
    </Button>
  );
};

type CategoryProps = {
  setCategory: (category: i.GalleryCategories) => void;
  activeCategory: i.GalleryCategories;
  category: {
    type: i.GalleryCategories;
    text: string;
  };
};
