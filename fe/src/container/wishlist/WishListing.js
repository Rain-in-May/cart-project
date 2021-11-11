import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import Sticky from 'react-stickynode';
import { Toolbar, CategorySearch, PostPlaceholder, SectionGrid, 
         FilterDrawer, SectionTitle, Heading } from 'components/index';
import { Checkbox } from 'antd';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import { EXHBN_DETAIL_PAGE } from 'settings/constant';
import ListingWrapper, { PostsWrapper } from 'container/exhibition/Listing/Listing.style';

const WishListing = ({match}) => {

  const [exhbnByHall, setExhbnByHall] = useState([])
  const { width } = useWindowSize();
  const { data, loading, loadMoreData, total, limit } = useDataApi(`http://localhost:8080/exhbns`+match.params.hallNum);
  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
  
  useEffect(() => {
    axios.get("http://localhost:8080/exhbns/hall/"+match.params.hallNum,
    ).then(resp => {
      setExhbnByHall(resp.data)
    }).catch(err => {
      alert(err)
      throw err
    })
  }, [])

  return (
    <>
    <ListingWrapper>
      <Fragment>
        <PostsWrapper className={width > 767}>
        <SectionTitle
          title={<Heading content={exhbnByHall.hallName} />}
        />
          <SectionGrid
            link={EXHBN_DETAIL_PAGE}
            columnWidth={columnWidth}
            data={exhbnByHall}
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
export default WishListing;