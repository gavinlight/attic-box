import React from 'react';

import AtticBoxLogo from 'vectors/logo.svg';
import { Button } from 'common/interaction';

import { HeaderContainer, AtticBox, Menu, Item } from './styled';

export const Header: React.FC = () => (
  <HeaderContainer>
    <AtticBox>
      <AtticBoxLogo />
      Attic Box Games
    </AtticBox>
    <Menu>
      <Item>Gallery</Item>
      <Item>Studio</Item>
      <Item>
        <Button small bold>Demo</Button>
      </Item>
    </Menu>
  </HeaderContainer>
);
