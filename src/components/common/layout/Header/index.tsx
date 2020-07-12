import React from 'react';

import AtticBoxLogo from 'vectors/logo.svg';
import { scrollTo } from 'services';
import { Button } from 'common/interaction';

import { HeaderContainer, AtticBox, Menu, Item } from './styled';

export const Header: React.FC = () => {
  const onMenuItemClick = (item: string) => () => scrollTo(item);

  return (
    <HeaderContainer>
      <AtticBox onClick={onMenuItemClick('#header')}>
        <AtticBoxLogo />
        Attic Box Games
      </AtticBox>
      <Menu>
        <Item onClick={onMenuItemClick('#gallery')}>
          Gallery
        </Item>
        <Item onClick={onMenuItemClick('#team')}>
          Studio
        </Item>
        <Item>
          <Button
            small
            bold
            as="a"
            href="https://gamejolt.com/games/Seek/30152/download/build/829453"
            target="_blank"
          >
            Demo
          </Button>
        </Item>
      </Menu>
    </HeaderContainer>
  );
};
