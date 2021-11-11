import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Table } from 'antd';
import ListWrapper, { Title } from 'container/review/List.style';
import { BOOKING_DETAIL_PAGE, EXHBN_DETAIL_PAGE } from 'settings/constant';
import { TextLink } from 'components/index';
import Moment from 'moment';
import 'moment/locale/ko'

const BookingList = () => {
  const user = JSON.parse(localStorage.getItem("cartuser"))

  const [bookingList, setBookingList] = useState([])
  const URL = 'http://localhost:8080/bookings/user/'
  useEffect(() => {
    axios.get(URL+user.userNum, { headers: { 'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then(resp => {
      setBookingList(resp.data)
    })
    .catch(err => {
      alert(err)
    })
  }, [])

  const columns = [
    {
      title: '예약번호',
      dataIndex: 'bookNum',
      key: 'bookNum',
      render: text => <TextLink link={`${BOOKING_DETAIL_PAGE}/${text}`} content={text}/>
    },
    {
      title: '전시명',
      dataIndex: 'exhbnTitle',
      key: 'exhbnTitle',
    },
    {
      title: '예약자명',
      dataIndex: 'bookName',
      key: 'bookName',
    },
    {
      title: '예약일자',
      dataIndex: 'bookDate',
      key: 'bookDate',
      render: Date => Moment(Date).lang("ko").format('YYYY-MM-DD (ddd)')
    },
    {
      title: '합계',
      dataIndex: 'totalPrice',
      key: 'totalPrice'
    },
    {
      title: '매수',
      dataIndex: 'bookTickets',
      key: 'bookTickets'
    },
  ];
  
  return (
      <ListWrapper>
      <Divider />
      <Title>예매 목록</Title>
      <Table dataSource={bookingList}
             columns={columns} />
      <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </ListWrapper>
    

  );
};

export default BookingList;
