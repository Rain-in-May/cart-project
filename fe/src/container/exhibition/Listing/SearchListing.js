import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import Sticky from 'react-stickynode';
import { Toolbar, CategorySearch, PostPlaceholder, SectionGrid, FilterDrawer, SectionTitle, Heading } from 'components/index';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import { EXHBN_DETAIL_PAGE } from 'settings/constant';
import ListingWrapper, { PostsWrapper } from 'container/exhibition/Listing/Listing.style';

const SearchListing = ({ location, history }) => {
  const [exhbn, setExhbn] = useState([])

  const { width } = useWindowSize();
  const { loading, loadMoreData, total, limit } = useDataApi(`http://localhost:8080/exhbns`);
  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];

  useEffect(() => {
    axios.get("http://localhost:8080/exhbns/search/"+sessionStorage.getItem('exhbnTitle'), 
    ).then(resp => {
      setExhbn(resp.data)
    }).catch(err => {
      alert(err)
      throw err
    })
  }, [])

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
      { exhbn.length != 0 ? 
      <Fragment>
        <PostsWrapper className={width > 767 }>
          <SectionGrid
            link={EXHBN_DETAIL_PAGE}
            columnWidth={columnWidth}
            data={exhbn}
            totalItem={total.length}
            loading={loading}
            limit={limit}
            handleLoadMore={loadMoreData}
            placeholder={<PostPlaceholder />}
          />
        </PostsWrapper>
      </Fragment>
      :
      <Fragment>
        <h2>검색 결과가 없습니다.</h2>
      </Fragment>
      }
    </ListingWrapper>
    </>
  );
}
export default SearchListing;