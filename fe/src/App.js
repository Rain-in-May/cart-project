import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { AuthContext } from 'context/index';
import { Layout } from 'container/index';
import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  FORGET_PASSWORD_PAGE,
  HOME_PAGE,
  USER_PROFILE_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
  BOOKING_PAGE,
  REVIEW_DETAIL_PAGE,
  BOOKING_DETAIL_PAGE,
  EXHBN_DETAIL_PAGE,
  EXHBN_ALL_LIST_PAGE,
  EXHBN_RECOMMEND_LIST_PAGE,
  EXHBN_SHOWING_LIST_PAGE,
  EXHBN_FIN_LIST_PAGE,
  HALL_DETAIL_PAGE,
  HALL_LIST_PAGE,
  LISTING_SEARCH_POST_PAGE,
  ADD_EXHBN_PAGE,
  UPDATE_EXHBN_PAGE,
  ADD_IMAGE_PAGE,
  ADD_HALL_PAGE,
  UPDATE_HALL_PAGE,
  REVIEW_LIST_PAGE,
  ANAL_PAGE,
  ADMIN_PAGE,
  LOGIN_HOME_PAGE,
  RESET_PAGE
} from 'settings/constant';

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import('container/common/Home'),
      loading: Loading,
      modules: ['Home'],
    }),
    exact: true,
  },
  {
    path: LOGIN_HOME_PAGE,
    component: Loadable({
      loader: () =>
        import('container/common/Home'),
      loading: Loading,
      modules: ['Home'],
    }),
    exact: true,
  },
  {
    path: LOGIN_PAGE,
    component: Loadable({
      loader: () =>
        import('container/user/SignIn/SignIn'),
      loading: Loading,
      modules: ['SignIn'],
    }),
  },
  {
    path: REGISTRATION_PAGE,
    component: Loadable({
      loader: () =>
        import('container/user/SignUp/SignUp'),
      loading: Loading,
      modules: ['SignUp'],
    }),
  },
  {
    path: FORGET_PASSWORD_PAGE,
    component: Loadable({
      loader: () =>
        import('container/user/ForgetPassword'),
      loading: Loading,
      modules: ['ForgetPassword'],
    }),
  },
  {
    path: USER_PROFILE_PAGE,
    component: Loadable({
      loader: () =>
        import('container/user/MyPage/AccountDetails/UserDetailsPage'),
      loading: Loading,
      modules: ['UserDetailsPage'],
    }),
  },
  {
    path: `${BOOKING_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import('container/booking/Booking'),
      loading: Loading,
      modules: ['Booking'],
    }),
  },
  {
    path: EXHBN_ALL_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/exhibition/Listing/AllListing'),
      loading: Loading,
      modules: ['ExhibitionList'],
    }),
  },
  {
    path: EXHBN_SHOWING_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/exhibition/Listing/ShowingListing'),
      loading: Loading,
      modules: ['ExhibitionList'],
    }),
  },
  {
    path: EXHBN_FIN_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/exhibition/Listing/FinListing'),
      loading: Loading,
      modules: ['ExhibitionList'],
    }),
  },
  {
    path: EXHBN_RECOMMEND_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/recommend/RecommendListing'),
      loading: Loading,
      modules: ['ExhibitionList'],
    }),
  },
  {
    path: `${HALL_LIST_PAGE}/:hallNum`,
    component: Loadable({
      loader: () =>
        import('container/exhibition/Listing/HallListing'),
      loading: Loading,
      modules: ['HallList'],
    }),
  },
  {
    path: `${BOOKING_DETAIL_PAGE}/:bookNum`,
    component: Loadable({
      loader: () =>
        import('container/booking/BookingDetail'),
      loading: Loading,
      modules: ['BookingDetail'],
    }),
  },
  {
    path: `${EXHBN_DETAIL_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import('container/exhibition/ExhibitionDetail'),
      loading: Loading,
      modules: ['ExbhnDetail'],
    }),
  },
  {
    path: LISTING_SEARCH_POST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/exhibition/Listing/SearchListing'),
      loading: Loading,
      modules: ['SearchListing'],
    }),
  },
  {
    path: `${HALL_DETAIL_PAGE}/:hallNum`,
    component: Loadable({
      loader: () =>
        import('container/hall/HallDetail'),
      loading: Loading,
      modules: ['HallDetail'],
    }),
  },
  {
    path: ADD_EXHBN_PAGE,
    component: Loadable({
      loader: () =>
        import('container/exhibition/AddExhibition'),
      loading: Loading,
      modules: ['AddExhibition'],
    }),
  },
  {
    path: `${UPDATE_EXHBN_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import('container/exhibition/UpdateExhibition'),
      loading: Loading,
      modules: ['UpdateExhbn'],
    }),
  },
  {
    path: ADD_HALL_PAGE,
    component: Loadable({
      loader: () =>
        import('container/hall/AddHall'),
      loading: Loading,
      modules: ['AddHall'],
    }),
  },
  {
    path: `${UPDATE_HALL_PAGE}/:hallNum`,
    component: Loadable({
      loader: () =>
        import('container/hall/UpdateHall'),
      loading: Loading,
      modules: ['UpdateHall'],
    }),
  },
  {
    path: ADD_IMAGE_PAGE,
    component: Loadable({
      loader: () =>
        import('container/exhibition/ExhibitionPhotos'),
      loading: Loading,
      modules: ['ExhibitionPhotos'],
    }),
  },
  {
    path: REVIEW_LIST_PAGE,
    component: Loadable({
      loader: () =>
        import('container/review/ReviewList'),
      loading: Loading,
      modules: ['ReviewList'],
    }),
  },
  {
    path: `${REVIEW_DETAIL_PAGE}/:reviewNum`,
    component: Loadable({
      loader: () =>
        import('container/review/ReviewDetail'),
      loading: Loading,
      modules: ['ReviewDetail'],
    }),
  },
  {
    path: ANAL_PAGE,
    component: Loadable({
      loader: () =>
        import('container/analysis/Analysis'),
      loading: Loading,
      modules: ['Analysis'],
    }),
  },
  {
    path: ADMIN_PAGE,
    component: Loadable({
      loader: () =>
        import('container/user/MyPage/Dashboard'),
      loading: Loading,
      modules: ['Dashboard'],
    }),
  },
];

/**
 *
 * Not Found Route Component
 *
 */

const NotFound = Loadable({
  loader: () =>
    import('container/common/404/Error404'),
  loading: Loading,
  modules: ['NotFound'],
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
      }
      {...rest}
    />
  );
};

/**
 *
 * Overall Router Component
 *
 */

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

        /* <ProtectedRoute path={ADD_EXHBN_PAGE} component={AddExhibition} />
        <ProtectedRoute
          path={USER_ACCOUNT_SETTINGS_PAGE}
          component={AccountSettingsPage}
        /> */

export default App
