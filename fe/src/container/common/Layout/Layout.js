import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout as LayoutWrapper } from 'antd';
import useWindowSize from 'library/hooks/useWindowSize';
import { LayoutProvider } from 'context/index';
import {
  EXHBN_ALL_LIST_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  USER_PROFILE_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
  ADD_EXHBN_PAGE,
  EXHBN_DETAIL_PAGE,
  CHANGE_PASSWORD_PAGE,
  FORGET_PASSWORD_PAGE,
  USER_IMAGE_EDIT_PAGE,
  USER_PASSWORD_CHANGE_PAGE,
} from 'settings/constant';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const { Content } = LayoutWrapper;

export default withRouter(function Layout({ children, location }) {
  const { width } = useWindowSize();
  const singlePageUrlFromConst = EXHBN_DETAIL_PAGE.split('/');
  const singlePageUrlFormLocation = location.pathname.split('/');

  return (
    <LayoutProvider>
      {location.pathname === LOGIN_PAGE ||
      location.pathname === CHANGE_PASSWORD_PAGE ||
      location.pathname === FORGET_PASSWORD_PAGE ||
      location.pathname === REGISTRATION_PAGE ? (
        <Content>{children}</Content>
      ) : (
        <Fragment>
          <Header />
          <Content>{children}</Content>
          {location.pathname === EXHBN_ALL_LIST_PAGE ||
          location.pathname === ADD_EXHBN_PAGE ||
          location.pathname === USER_PROFILE_PAGE ||
          location.pathname === CHANGE_PASSWORD_PAGE ||
          location.pathname === FORGET_PASSWORD_PAGE ||
          location.pathname ===
            `${USER_ACCOUNT_SETTINGS_PAGE + USER_IMAGE_EDIT_PAGE}` ||
          location.pathname ===
            `${USER_ACCOUNT_SETTINGS_PAGE + USER_PASSWORD_CHANGE_PAGE}` ||
          location.pathname === USER_ACCOUNT_SETTINGS_PAGE ? (
            <div style={{ height: '33px' }} />
          ) : (
            <Fragment>
              <Footer />
              {singlePageUrlFormLocation[1] === singlePageUrlFromConst[1] && (
                <Fragment>
                  {width < 1200 && <div style={{ height: '74px' }} />}
                </Fragment>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </LayoutProvider>
  );
});
