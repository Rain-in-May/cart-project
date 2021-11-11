import React, { useContext, useState, useEffect } from 'react';
import { Divider, Table } from 'antd';
import ListWrapper, { TableWrapper, Title } from 'container/review/List.style';
import { REVIEW_DETAIL_PAGE } from 'settings/constant';
import { TextLink } from 'components/index';
import Moment from 'moment';
import 'moment/locale/ko'
import axios from 'axios';

const ReviewList = () => {
  const user = JSON.parse(localStorage.getItem("cartuser"))
  const [ reviewList, setReviewList ] = useState([])

  useEffect(() => {
    const URL = 'http://localhost:8080/reviews/user/'
    axios.get(URL+user.userNum, { headers: { 'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then(resp => {
      setReviewList(resp.data)
    })
    .catch(err => {
      alert('유저 리뷰리스트 '+err)
    })
  }, [])

  const columns = [
    {
      title: '리뷰번호',
      dataIndex: 'reviewNum',
      key: 'reviewNum',
      render: text => <TextLink link={`${REVIEW_DETAIL_PAGE}/${text}`} content={text}/>
    },
    {
      title: '리뷰내용',
      dataIndex: 'reviewContent',
      key: 'reviewContent',
    },
    {
      title: '등록일',
      dataIndex: 'regDate',
      key: 'regDate',
      render: Date => Moment(Date).lang("ko").format('YYYY-MM-DD (ddd)'),
    },
  ];
  
  return (
    <ListWrapper>
      <Divider />
      <Title>리뷰 목록</Title>
      <TableWrapper>
      <Table dataSource={reviewList} 
             columns={columns} /></TableWrapper>
      <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </ListWrapper>
    

  );
};

export default ReviewList;
