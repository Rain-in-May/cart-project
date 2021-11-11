import React from 'react';
import { Heading, TextLink, Container, SectionGrid, PostPlaceholder, SectionTitle } from 'components/index';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import {
  EXHBN_DETAIL_PAGE
} from 'settings/constant';

const PopularExhbn = () => {
  const { data, loading } = useDataApi('http://localhost:8080/exhbns/topList');
  const { width } = useWindowSize();

  let posts = data;
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

  return (<>
    { posts != null ?
    <Container fluid={true}>
      <SectionTitle
        title={<Heading content="TOP10: 인기 전시" />}
      />

      <SectionGrid
        link={EXHBN_DETAIL_PAGE}
        columnWidth={[1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        data={posts}
        loading={loading}
        limit={limit}
        placeholder={<PostPlaceholder />}
      />
    </Container> : <> 전시 목록이 없습니다. </> } </>
  );
};

export default PopularExhbn;
