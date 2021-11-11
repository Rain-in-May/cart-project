import React, { useState, useEffect } from 'react';
import { Title } from 'container/booking/Booking.style';
import { Information } from 'container/index';
import { Loader } from 'components/index'
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

const BookingInfo = ( props ) => {

  const [ exhbnDetail, setExhbnDetail ] = useState([])
  const [ props2 ] = useState([])

  const URL = `http://localhost:8080/exhbns/`

  useEffect(() => {
    axios.get(URL+props.exhbnNum)
    .then(reps => {
      setExhbnDetail(reps.data)
    })
    .catch(err => {
      alert(`실패`)
      throw err;
    })
  }, [])

  if (isEmpty(exhbnDetail)) return <Loader />;
  
  const { rating, ratingCount, amenities, author} = props2;

  return (
    <form> 
      <div>
        <Title>예매 정보</Title> <br/>
        <Information
              content={exhbnDetail.exhbnContent}
              title={exhbnDetail.exhbnTitle}
              number={exhbnDetail.exhbnNum}
              location={exhbnDetail.hallName}
              genre={exhbnDetail.exhbnGenre}
              artist={exhbnDetail.exhbnArtist}
              start={exhbnDetail.startDate}
              end={exhbnDetail.endDate}
              price={exhbnDetail.exhbnPrice}
              image={exhbnDetail.exhbnImage}
              rating={exhbnDetail.totalScore}
              ratingCount={exhbnDetail.totalScore}
            />
      </div>
      <br/>
    </form>
  );
};

export default BookingInfo;
