import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AuthContext } from 'context/index';
import {
  HOME_PAGE,
  EXHBN_ALL_LIST_PAGE,
  HALL_DETAIL_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
  USER_PROFILE_PAGE,
} from 'settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${EXHBN_ALL_LIST_PAGE}`}>Exhibition</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${HALL_DETAIL_PAGE}/1`}>Hall</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${USER_PROFILE_PAGE}`}>MyPage</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MobileMenu;
