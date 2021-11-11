import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Modal, Divider } from 'antd';
import { BookingForm, BookingInfo } from 'container/index';
import Wrapper from 'container/booking/Booking.style';
const Booking = ( { match } ) => {

  return (
    <Wrapper>
      <Divider />
        <Row gutter={48}>
          <Col span={15}>
            <BookingInfo exhbnNum = {match.params.exhbnNum}/>
          </Col>
          <Col span={8}>
            <BookingForm/>
          </Col>
        </Row>
        <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </Wrapper>
  );
};

export default Booking;
