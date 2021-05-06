import React from 'react';

import AtticBoxLogo from 'vectors/logo.svg';
import { scrollTo } from 'services';
import { DemoButton } from 'modules/Demo';

import { HeaderContainer, AtticBox, Menu, Item } from './styled';

export const Header: React.FC = () => {
  const onMenuItemClick = (item: string, offset?: number) => () => scrollTo(item, offset);

  return (
    <HeaderContainer>
      <AtticBox onClick={onMenuItemClick('#header')}>
        <AtticBoxLogo width="33" />
        Attic Box Games
      </AtticBox>
      <Menu>
        <Item onClick={onMenuItemClick('#world', 100)}>
          <span>Story</span>
        </Item>
        <Item onClick={onMenuItemClick('#gallery')}>
          <span>Gallery</span>
        </Item>
        <Item onClick={onMenuItemClick('#team')}>
          <span>Studio</span>
        </Item>
        <Item>
          <DemoButton small>
            Demo
          </DemoButton>
        </Item>
      </Menu>
    </HeaderContainer>
  );
};
