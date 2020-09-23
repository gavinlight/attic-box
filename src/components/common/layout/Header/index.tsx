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
        <AtticBoxLogo />
        Attic Box Games
      </AtticBox>
      <Menu>
        <Item onClick={onMenuItemClick('#world', 100)}>
          Story
        </Item>
        <Item onClick={onMenuItemClick('#gallery')}>
          Gallery
        </Item>
        <Item onClick={onMenuItemClick('#team')}>
          Studio
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
