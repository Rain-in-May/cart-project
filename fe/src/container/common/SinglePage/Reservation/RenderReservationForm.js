import React, { useState, useStyles, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { HtmlLabel, InputIncDec } from 'components/index';
import { Booking } from 'container/index';
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  ItemWrapper,
} from 'container/common/SinglePage/Reservation/Reservation.style.js';
import { Link, useHistory } from 'react-router-dom'
import { BOOKING_PAGE, LOGIN_PAGE } from 'settings/constant'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";


const RenderReservationForm = ( props ) => {
  const [bookDate, setBookDate] = useState(new Date());
  const [tickets, setTickets] = useState(0);
  const history = useHistory();

  const handleIncrement = (tickets) => {
    setTickets(tickets + 1);
  };
  const handleDecrement = (tickets) => {
    if (tickets <= 0) {
      return false;
    }
    setTickets(tickets - 1);
  };
  const handleIncDecOnChange = e => {
    let currentValue = e.target.value;
    setTickets(currentValue);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const onClick = e => {
    e.preventDefault();
    sessionStorage.setItem("price", props.price)
    sessionStorage.setItem("exhbnNum", props.number)
    sessionStorage.setItem("tickets", tickets)
    sessionStorage.setItem("bookDate", bookDate)
    { localStorage.getItem("token") !== null ? 
      history.push(`${BOOKING_PAGE}/${props.number}`)
    :
      alert(`로그인 후에 이용 가능합니다.`)
    }
  }

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FieldWrapper>
        <HtmlLabel htmlFor="dates" content="날짜" />
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={bookDate}
          onChange={date => setBookDate(date)}
          minDate={new Date()}
        />
      </FieldWrapper>
      <FieldWrapper>
        <ItemWrapper>
          <HtmlLabel htmlFor="dates" content="매수" />
          <InputIncDec
            id="adult"
            increment={() => handleIncrement(tickets)}
            decrement={() => handleDecrement(tickets)}
            onChange={handleIncDecOnChange}
            value={tickets}
          />
         </ItemWrapper>
      </FieldWrapper>
      <FormActionArea>
        <Button htmlType="submit" type="primary" 
                onClick = {onClick}>
          예매하기
        </Button>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
