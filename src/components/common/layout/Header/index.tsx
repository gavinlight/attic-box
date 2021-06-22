import React from 'react';
import { useHistory } from 'react-router-dom';

import AtticBoxLogo from 'vectors/logo.svg';
import { scrollTo } from 'services';
import { useMobile } from 'hooks';
import { DemoButton } from 'modules/Demo';

import { HeaderContainer, AtticBox, Menu, Item } from './styled';

export const Header: React.FC<HeaderProps> = ({
  isSubPage,
}) => {
  const history = useHistory();
  const [isMobile] = useMobile();
  const onMenuItemClick = (item: string, offset?: number) => () => {
    history.push('/');

    setTimeout(() => {
      scrollTo(item, offset);
    }, 0);
  };

  return (
    <HeaderContainer isTransparent={isSubPage}>
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
        {!isMobile && (
          <Item onClick={() => {
            window.scrollTo(0, 0);
            history.push('/devlogs');
          }}>
            <span>Devlogs</span>
          </Item>
        )}
        <Item>
          <DemoButton small>
            Demo
          </DemoButton>
        </Item>
      </Menu>
    </HeaderContainer>
  );
};

type HeaderProps = {
  isSubPage?: boolean;
};
