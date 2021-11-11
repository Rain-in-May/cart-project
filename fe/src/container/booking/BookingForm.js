import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Divider, Modal } from 'antd';
import { FormControl  } from 'components/index';
import { AuthContext } from 'context/index';
import { FieldWrapper, SwitchWrapper, Label,  Title, TitleInfo, 
         Button, Text, Input, Checkbox, A } from 'container/booking/Booking.style';
import { TextField } from '@material-ui/core';
import { USER_PROFILE_PAGE } from 'settings/constant'
import TextInfo from 'components/UI/Text/Text';
import { Consent } from 'container/index';
import axios from 'axios';
import Moment from 'moment';
import 'moment/locale/ko'

const BookingForm = () => {
  const bookingDate = sessionStorage.getItem("bookDate")
  const tickets = sessionStorage.getItem("tickets")
  const price = sessionStorage.getItem("price")
  const exhbnNum = sessionStorage.getItem("exhbnNum")
  const user = JSON.parse(localStorage.getItem("cartuser"))
  let totalprice = useState('')
  { price === '무료' ? totalprice = '0원' :
          totalprice = (price*tickets).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원'}

  const [ addBooking, setAddBooking ] = useState({
    bookName : "",
    bookEmail : "",
    bookPnumber : "",
    totalPrice : totalprice,
    bookDate : Moment(bookingDate).format('YYYY-MM-DD'),
    bookTickets : tickets+'매',
    exhbnNum : exhbnNum,
    userNum: user.userNum
  })
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const { bookName, bookEmail, bookPnumber, bookDate } = addBooking
  const onChange = useCallback(e => {
    setAddBooking({...addBooking, [e.target.name]: e.target.value})
  })
  const history = useHistory();
  const URL = 'http://localhost:8080/bookings'
  
  const booking = e => {
    e.preventDefault()
    const del = window.confirm("예약 하시겠습니까?")
    if(del){
    axios({
      url: URL,
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem("token")},
      data: addBooking
    })
    .then(resp => {
      alert(`예매되었습니다.`)
      sessionStorage.removeItem("bookDate")
      sessionStorage.removeItem("tickets")
      sessionStorage.removeItem("price")
      sessionStorage.removeItem("exhbnNum")
      history.push(USER_PROFILE_PAGE)
    })
    .catch(err => {
      alert(`예약 실패`)
      throw err;
    })}
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <form> 
      <div>
        <Title>예매자 정보</Title><br/>
        <TextInfo content={'예매자의 정보를 입력해주세요.'}/><br/>
        <Label>이름</Label><br/>
        <Input name="bookName" value={bookName} placeholder = "  이름을 입력하세요." required
          onChange = {onChange}/>
      </div>
      <div>
        <Label>이메일</Label><br/>
        <Input name="bookEmail" value={bookEmail} placeholder = "  이메일을 입력하세요." required
          onChange = {onChange}/>
      </div>
      <div>
        <Label>전화번호</Label><br/>
        <Input name="bookPnumber" value={bookPnumber} placeholder = "  전화번호를 입력하세요." required
          onChange = {onChange}/>
      </div><br/>
        <Label>예매정보</Label>
        <TitleInfo> {Moment(bookDate).lang("ko").format('YYYY-MM-DD (ddd)')}, 총 {tickets}매</TitleInfo>
        <Divider/>
        <Text>합계</Text>
        <TitleInfo>{totalprice}</TitleInfo>
        <br/>
        <Checkbox type="checkbox" id="check" className="checkbox"/>
        <label htmlFor="check"> 예약 서비스 이용을 위한
        <A onClick={ e => showModal() }> 개인정보 수집 및 제3자 제공, 취소/환불 규정</A>
        <Modal title="개인정보 수집 및 제공 동의" 
               visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Consent/>
        </Modal>
        을 확인하였으며 이에 동의합니다.</label>
        <br/><br/>
      <Button type="button" onClick={booking}>
          예매하기
      </Button>
    </form>
  );
};

export default BookingForm;