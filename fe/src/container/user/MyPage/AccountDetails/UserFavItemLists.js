import React, { useEffect, useState } from 'react';
import { SectionGrid, PostPlaceholder } from 'components/index';
import useDataApi from 'library/hooks/useDataApi';
import { EXHBN_DETAIL_PAGE } from 'settings/constant';
import axios from 'axios';

const UserFavItemLists = () => {
  const { data, loadMoreData, loading } = useDataApi('');
  const [ exhbnnum, setExhbnnum ] = useState(602)
  const [ exhbnList, setExhbnList ] = useState([])

  const URL = 'http://localhost:8080';
  useEffect(() => {
    axios.get(URL+'/wishlist', {headers: {'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then(resp => {
      setExhbnnum(resp.data.exhbnNum)
    })
    .catch(err => {
      alert(err)
    })
    axios.get(URL+'/exhbns/get/'+exhbnnum, {headers: {'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then(resp => {
      setExhbnList(resp.data)
    })
    .catch(err => {
      alert(err)
    })
  }, [])

  return (
    <SectionGrid
      link={EXHBN_DETAIL_PAGE}
      data={exhbnList}
      loading={loading}
      limit={6}
      totalItem={exhbnList.length}
      columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
      placeholder={<PostPlaceholder />}
      handleLoadMore={loadMoreData}
    />
  );
};

export default UserFavItemLists;
