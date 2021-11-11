import React, { useEffect, useState } from 'react';
import { Heading, TextLink, Container, PostPlaceholder,
         SectionGrid, SectionTitle } from 'components/index';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import { EXHBN_RECOMMEND_LIST_PAGE, EXHBN_DETAIL_PAGE } from 'settings/constant';
import axios from 'axios';
const RecommendExhbn = () => {
  const [ url, setUrl ] = useState('')
  const { data, loading } = useDataApi(url);
  const { width } = useWindowSize();
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

  return (<>
    { posts != null ?
    <Container fluid={true}>
      <SectionTitle
        title={<Heading content="취향저격: 추천 전시" />}
        link={<TextLink link={EXHBN_RECOMMEND_LIST_PAGE} content="Show all" />}
      />
      <SectionGrid
        link={EXHBN_DETAIL_PAGE}
        columnWidth={[1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        data={exhbnList}
        loading={loading}
        limit={limit}
        placeholder={<PostPlaceholder />}
      />
    </Container> : <> 전시 목록이 없습니다. </>}
  </>);
};

export default RecommendExhbn;
