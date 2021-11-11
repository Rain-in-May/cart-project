import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { setStateToUrl, getStateFromUrl } from 'library/helpers/url_handler';
import { EXHBN_ALL_LIST_PAGE } from 'settings/constant';
import { NavbarSearchWrapper } from 'container/common/Layout/Header/Header.style';

const NavbarSearch = (props) => {
  const updateValueFunc = (value) => {
    let tempLocation = [];
    const searchLocation = tempLocation ? tempLocation[0] : {};
    if (!isEmpty(searchLocation)) {
      const state = getStateFromUrl(props.location);
      const query = {
        ...state,
        location: searchLocation,
      };
      const search = setStateToUrl(query);
      props.history.push({
        pathname: EXHBN_ALL_LIST_PAGE,
        search: search,
      });
    }
  };

  return (
    <NavbarSearchWrapper className="navbar_search">
      <FiSearch />
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
