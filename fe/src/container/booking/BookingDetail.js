import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Divider, Col} from 'antd';
import Wrapper, { TextInfo, Label, Title, Input, TextLink } from 'container/booking/Booking.style';
import { EXHBN_DETAIL_PAGE, USER_PROFILE_PAGE } from 'settings/constant'
import Moment from 'moment';
import 'moment/locale/ko';

const BookingDetail = ({match}) => {

  const [bookingDetail, setBookingDetail] = useState({})

  const [ updateBooking, setUpdateBooking ] = useState({
    bookName : "", bookPnumber : "", bookEmail : ""
  })
  const { bookName, bookPnumber, bookEmail } = updateBooking
  const onChange = useCallback(e => {
    setUpdateBooking({...updateBooking, [e.target.name]: e.target.value})
  })

  const history = useHistory();
  const URL = 'http://localhost:8080/bookings/'

  useEffect(() => {
    axios.get(URL+match.params.bookNum, 
              { headers: { 'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then((resp) => {
      setBookingDetail(resp.data)
    })
    .catch((err) => {
      alert(`실패`)
      throw err;
    })
  }, [])

  const handleEditBooking = e => {
    e.preventDefault()
    const del = window.confirm("예매자 정보를 수정하시겠습니까?")
    if(del){
      axios({
        url: URL+match.params.bookNum,
        method: 'put',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        },
        data: {
          bookEmail, bookName, bookPnumber
        }
      })
      .then(resp => {
        alert(`수정되었습니다.`)
        window.location.reload()
      })
      .catch(err => {
        alert(`수정 실패`)
        throw err;
      })
    }
  }
 
  const handleDeleteBooking = e => {
      e.preventDefault()
      const del = window.confirm("예매를 취소하시겠습니까?")
      if(del){
        axios({
          url: URL+match.params.bookNum,
          method: 'delete',
          headers: {
            'Content-Type'  : 'application/json',
            'Authorization' : 'Bearer '+localStorage.getItem("token")
          }
        })
        .then(resp => {
          alert(`예매 취소 완료`)
          history.push(USER_PROFILE_PAGE)
        })
        .catch(err => {
          alert(`예매 취소가 실패하였습니다.`)
          throw err;
        })
      }
  }
 
  return (
      <Wrapper>
      <Divider />
        <Col xl={13}>
        <Title>예매 정보</Title><br/>
        <Label>No.</Label>
        <TextInfo> {bookingDetail.bookNum} </TextInfo>
        <Label>전시명</Label>
        <Link to={`${EXHBN_DETAIL_PAGE}/${bookingDetail.exhbnNum}`}>
        <TextLink className="link"> {bookingDetail.exhbnTitle} </TextLink></Link>
        <Label>예약일</Label>
        <TextInfo> {Moment(bookingDetail.bookDate).lang('ko').format('YYYY-MM-DD (ddd)')} </TextInfo>
        <Label>결제금액</Label>
        <TextInfo> {bookingDetail.totalPrice} </TextInfo>
        <Label>매수</Label>
        <TextInfo> {bookingDetail.bookTickets} </TextInfo>
        </Col>
        <Col xl={5}>
        <div>
        <Title>예매자 정보</Title><br/>
        <Label>예매자명</Label>
        <Input className="inputbox" name="bookName"
          defaultValue = { bookingDetail.bookName }
          onChange = { onChange }
          /><br/>
        <Label>이메일</Label>
        <Input name="bookEmail"
          defaultValue = { bookingDetail.bookEmail }
          onChange = { onChange }
          required /><br/>
        <Label>전화번호</Label>
        <Input name="bookPnumber"
          defaultValue = { bookingDetail.bookPnumber }
          onChange = { onChange }
          required />
        </div>
        </Col>
        <div className="container">
        <Link to={USER_PROFILE_PAGE}><button className="btn">목록</button></Link>
        <button className="btn" onClick = { handleEditBooking }>수정</button>
        <button className="cancle-btn" onClick = { handleDeleteBooking }>예매취소</button>
        </div>
      <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </Wrapper>
    

  );
};


export default BookingDetail;
