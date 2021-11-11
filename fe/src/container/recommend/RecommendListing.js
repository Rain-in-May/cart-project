import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import Sticky from 'react-stickynode';
import { Toolbar, CategorySearch, PostPlaceholder, SectionGrid, FilterDrawer } from 'components/index';
import { Checkbox } from 'antd';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import { EXHBN_DETAIL_PAGE } from 'settings/constant';
import ListingWrapper, { PostsWrapper } from 'container/exhibition/Listing/Listing.style';

const RecommendListing = ({ location, history }) => {
  const { width } = useWindowSize();
  const { data, loading, loadMoreData, total } = useDataApi('');
  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
  const user = JSON.parse(localStorage.getItem("cartuser"))
  const [ exhbnList, setExhbnList ] = useState([])
  const URL = 'http://localhost:8080/recommends/';
  useEffect(() => {
    if(user){
    axios.get(URL+user.userNum, {headers: {'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then(resp => {
      setExhbnList(resp.data)
    })
    .catch(err => {
      alert(err)
    })}
    else{
      return (<></>)
    }
  }, [exhbnList, setExhbnList])

  let posts = exhbnList;
  let limit;

  if (data && width <= 767) {
    posts = data.slice(0, 4);
    limit = 4;
  }
  if (data && width >= 768) {
    posts = data.slice(0, 6);
    limit = 6;
  }
  if (data && width >= 992) {
    posts = data.slice(0, 8);
    limit = 8;
  }
  if (data && width >= 1200) {
    posts = data.slice(0, 10);
    limit = 10;
  }

  return (
    <>
    <ListingWrapper>
      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            width > 991 ? (
              <CategorySearch history={history} location={location} />
            ) : (
              <FilterDrawer history={history} location={location} />
            )
          }
        />
      </Sticky>

      <Fragment>
        <PostsWrapper className={width > 767}>
          <SectionGrid
            link={EXHBN_DETAIL_PAGE}
            columnWidth={columnWidth}
            data={exhbnList}
            totalItem={total.length}
            loading={loading}
            limit={limit}
            handleLoadMore={loadMoreData}
            placeholder={<PostPlaceholder />}
          />
        </PostsWrapper>
      </Fragment>
    </ListingWrapper>
    </>
  );
}
export default RecommendListing;