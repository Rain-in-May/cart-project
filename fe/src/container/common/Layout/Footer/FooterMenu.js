import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  EXHBN_ALL_LIST_PAGE,
  USER_PROFILE_PAGE,
  HALL_DETAIL_PAGE
} from 'settings/constant';

const FooterMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <NavLink to={`${HOME_PAGE}`}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${EXHBN_ALL_LIST_PAGE}`}>Exhibition</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${HALL_DETAIL_PAGE}/1`}>Hall</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
