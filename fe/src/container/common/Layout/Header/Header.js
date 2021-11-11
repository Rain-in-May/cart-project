import React, { useState, useContext } from 'react';
import Sticky from 'react-stickynode';
import { withRouter } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { Button, Drawer } from 'antd';
import { Logo, Text, TextLink, Navbar } from 'components/index';
import { AuthContext, LayoutContext } from 'context/index';
import useWindowSize from 'library/hooks/useWindowSize';
import { USER_PROFILE_PAGE } from 'settings/constant';
import { AuthMenu, MainMenu, MobileMenu, ProfileMenu, NavbarSearch } from 'container/index';
import HeaderWrapper, {
  MobileNavbar,
  CloseDrawer,
  AvatarWrapper,
  AvatarImage,
  AvatarInfo,
  LogoArea,
} from 'container/common/Layout/Header/Header.style';

const avatarImg = `http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png`;

export default withRouter(function Header({ location }) {
  const [{ searchVisibility }] = useContext(LayoutContext);
  const { loggedIn } = useContext(AuthContext);
  const { width } = useWindowSize();
  const [state, setState] = useState(false);

  const sidebarHandler = () => {
    setState(!state);
  };

  const headerType = location.pathname === '/' ? 'default' : 'default';

  return (
    <HeaderWrapper>
      <Sticky
        top={headerType === 'transparent' ? -1 : 0}
        innerZ={10001}
        activeClass="isHeaderSticky"
      >
        {width > 991 ? (
          <Navbar
            logo={
              <>
                {headerType === 'transparent'}
                <Logo
                  withLink
                  linkTo="/"
                  src="/images/cartlogo.png"
                />
              </>
            }
            navMenu={<MainMenu />}
            authMenu={<AuthMenu />}
            isLogin={loggedIn}
            avatar={<Logo src={avatarImg} />}
            profileMenu={<ProfileMenu avatar={<Logo src={avatarImg} />} />}
            headerType={headerType}
            // searchComponent={<NavbarSearch />}
            location={location}
            searchVisibility={searchVisibility}
          />
        ) : (
          <MobileNavbar className={headerType}>
            <LogoArea>
              <>
                {headerType === 'transparent'}
                <Logo
                  withLink
                  linkTo="/"
                  src="/images/cartlogo.png"
                  title=""
                />
              </>
            </LogoArea>
            <Button
              className={`hamburg-btn ${state ? 'active' : ''}`}
              onClick={() => sidebarHandler()}
            >
              <span />
              <span />
              <span />
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={sidebarHandler}
              width="285px"
              className="mobile-header"
              visible={state}
            >
              <CloseDrawer>
                <button onClick={() => sidebarHandler()}>
                  <IoIosClose />
                </button>
              </CloseDrawer>
              {loggedIn ? (
                <AvatarWrapper>
                  <AvatarImage>
                    <Logo src={avatarImg} />
                  </AvatarImage>
                  <AvatarInfo>
                    <Text as="h3" content="Nova Scotia" />
                    <TextLink
                      link={USER_PROFILE_PAGE}
                      content="View Profile"
                    />
                  </AvatarInfo>
                </AvatarWrapper>
              ) : (
                <AuthMenu className="auth-menu" />
              )}
              <MobileMenu className="main-menu" />
            </Drawer>
          </MobileNavbar>
        )}
      </Sticky>
    </HeaderWrapper>
  );
});
