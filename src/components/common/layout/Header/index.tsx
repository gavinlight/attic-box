import React from 'react';
import { navigate } from 'gatsby';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import AtticBoxLogo from 'vectors/logo.svg';
import { scrollTo } from 'services';
import { useMobile, useScrollDirection } from 'hooks';
import { DemoButton } from 'modules/Demo';

import { HeaderContainer, AtticBox, Menu, Item, ToggleMobileMenu } from './styled';

export const Header: React.FC<HeaderProps> = ({
  demoButton,
  isSubPage,
}) => {
  const menuScrollRef = React.useRef<HTMLUListElement>(null);
  const scrollDirection = useScrollDirection({
    initialDirection: 'top',
    thresholdPixels: 200,
  });

  const [isMobile] = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  React.useEffect(() => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      setTimeout(() => {
        disableBodyScroll(menuScrollRef.current as HTMLUListElement);
      }, 0);
    } else {
      clearAllBodyScrollLocks();
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [mobileMenuOpen]);

  const onMenuItemClick = (item: string, offset?: number) => () => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    setTimeout(() => {
      scrollTo(item, offset);
    }, 0);
  };

  return (
    <HeaderContainer
      isTransparent={isSubPage}
      $hide={scrollDirection === 'down'}
    >
      <ToggleMobileMenu
        $open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span /><span /><span /><span />
      </ToggleMobileMenu>
      <AtticBox onClick={onMenuItemClick('#header')}>
        <AtticBoxLogo width="33" />
        <span>Attic Box Games</span>
      </AtticBox>
      <Menu
        ref={menuScrollRef}
        $open={mobileMenuOpen}
      >
        <Item onClick={onMenuItemClick('#world', 100)}>
          <span>Story</span>
        </Item>
        <Item onClick={onMenuItemClick('#gallery')}>
          <span>Gallery</span>
        </Item>
        <Item onClick={onMenuItemClick('#team')}>
          <span>Studio</span>
        </Item>
        <Item onClick={() => navigate('/devlogs')}>
          <span>Devlogs</span>
        </Item>
        {demoButton?.demoUrl && demoButton?.gamejoltUrl && (
          <Item>
            <DemoButton
              small
              demoUrl={demoButton.demoUrl}
              gamejoltUrl={demoButton.gamejoltUrl}
            >
              Demo
            </DemoButton>
          </Item>
        )}
      </Menu>
    </HeaderContainer>
  );
};

type HeaderProps = {
  isSubPage?: boolean;
  demoButton: {
    demoUrl?: string;
    gamejoltUrl?: string;
  };
};
