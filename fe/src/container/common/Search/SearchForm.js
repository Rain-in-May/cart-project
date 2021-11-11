import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from 'antd';
import { LISTING_SEARCH_POST_PAGE } from 'settings/constant';
import {
  FormWrapper,
  ComponentWrapper
} from 'container/common/Search/Search.style';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const SearchForm = ({ history }) => {
  const [ exhbnTitle, setExhbnTitle ] = useState('')
  const searchTitle = () => {
    
  }

  const onKeyPress = e => {
    if(e.key == 'Enter'){
      onClick()
    }
  }

  const onClick = e => {
    sessionStorage.setItem('exhbnTitle', exhbnTitle)
    history.push(LISTING_SEARCH_POST_PAGE)
  }

  return (
    <FormWrapper>
      <ComponentWrapper>
        <FaMapMarkerAlt className="map-marker" />
        <div className="map_autocomplete">
            <Input
              type="text"
              defaultValue=""
              placeholder="검색하기"
              size="large"
              onChange = {e => {setExhbnTitle(`${ e.target.value }`)}}
              onKeyPress = { onKeyPress }
            />
        </div>
      </ComponentWrapper>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        onClick={ onClick }
      >
        전시 검색
      </Button>
    </FormWrapper>
  );
};

export default withRouter(SearchForm);
