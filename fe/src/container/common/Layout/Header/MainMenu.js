import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  EXHBN_ALL_LIST_PAGE,
  HALL_DETAIL_PAGE,
  USER_PROFILE_PAGE,
  LOGIN_PAGE
} from 'settings/constant';

const MainMenu = ({ className }) => {
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
      { localStorage.getItem("token") !== null ?
      <Menu.Item key="3">
        <NavLink to={`${USER_PROFILE_PAGE}`}>MyPage</NavLink>
      </Menu.Item>
      :
      <Menu.Item key="3">
        <NavLink to={`${LOGIN_PAGE}`}>MyPage</NavLink>
      </Menu.Item>
      }
    </Menu>
  );
};

export default MainMenu;
