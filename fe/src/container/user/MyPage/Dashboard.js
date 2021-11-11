import React, {useContext} from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { AuthProvider, AuthContext } from 'context/index';
import AgentDetailsPage, {
    BannerSection,
    UserInfoArea,
    ProfileImage,
    ProfileInformationArea,
    ProfileInformation,
    NavigationArea,
  } from 'container/user/MyPage/AccountDetails/UserDetails.style';
import { Menu, Popover } from 'antd';
import { Container, Image, Heading, Text, Loader, ProfilePicLoader } from 'components/index';
import { Analysis, Settings } from 'container/index'
import {
    ANAL_PAGE, SETTING_PAGE
} from 'settings/constant';
import { SettingOutlined, PieChartOutlined } from '@ant-design/icons';

const ProfileNavigation = (props) => {
  const { match, className } = props;
  const { loggedIn } = useContext(AuthContext);
  return (<>
    <NavigationArea>
      <Container fluid={true}>
        <Menu className={className}>
          <Menu.Item key="0">
            <NavLink exact to={`${match.url}`}>
            <PieChartOutlined />
            Analystic
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to={`${match.url}${SETTING_PAGE}`}>
              <SettingOutlined/>
              Settings
            </NavLink>
          </Menu.Item>
        </Menu>
      </Container>
    </NavigationArea></>
  );
}

const ProfileRoute = (props) => {
  const { match } = props;
  return (
    <Container fluid={true}>
      <Route exact
        path={`${match.path}`}
        component={Analysis}
      />
      <Route
        path={`${match.path}${SETTING_PAGE}`}
        component={Settings}
      />
    </Container>
  );
};

const Dashboard = (props) => {
  return (<>
        <ProfileNavigation {...props} />
        <ProfileRoute {...props} />
        </>
  );
}

export default Dashboard;
