import React from 'react';
import { Link } from 'gatsby';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import AtticBoxLogo from 'vectors/logo.svg';
import { scrollTo } from 'services';
import { useMobile, useScrollDirection } from 'hooks';
import { DemoButton } from 'modules/Demo';

import { HeaderContainer, AtticBox, Menu, Item, ToggleMobileMenu } from './styled';

export const Header: React.FC<HeaderProps> = ({
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

  const onMenuItemClick = (event: React.MouseEvent, item: string, offset?: number) => {
    setMobileMenuOpen(false);
    if (window.location.pathname === '/') {
      event.preventDefault();
      window.history.pushState(null, '', item);
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
      <AtticBox>
        <Link to="/" onClick={(event) => onMenuItemClick(event, '#header')}>
          <AtticBoxLogo width="33" />
          <span>Attic Box Games</span>
        </Link>
      </AtticBox>
      <Menu
        ref={menuScrollRef}
        $open={mobileMenuOpen}
      >
        <Item>
          <Link to="/#world" onClick={(event) => onMenuItemClick(event, '#world', 100)}>
            Story
          </Link>
        </Item>
        <Item>
          <Link to="/#gallery" onClick={(event) => onMenuItemClick(event, '#gallery')}>
            Gallery
          </Link>
        </Item>
        <Item>
          <Link to="/#team" onClick={(event) => onMenuItemClick(event, '#team')}>
            Studio
          </Link>
        </Item>
        <Item>
          <Link to="/devlogs">Devlogs</Link>
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

type HeaderProps = {
  isSubPage?: boolean;
};
