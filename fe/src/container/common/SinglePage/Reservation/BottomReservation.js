import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Rating, StickyBooking } from 'components/index';
import { Button, Modal } from 'antd';
import { Reservation, RenderReservationForm } from 'container/index';


const BottomReservation = ({ title, price, rating, ratingCount }) => {
  const [visible, setVisible] = useState(false);
  let ticketPrice = useState('')
  {price === '무료' || price === '' ? ticketPrice = '무료' :
        ticketPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원'}
  return (
    <>
      <StickyBooking
        logo="/images/cartlogo.png"
        title={title}
        price={ticketPrice}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
        action={
          <Button type="primary" onClick={() => setVisible(true)}>
            예매
          </Button>
        }
      />

      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        maskStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
        wrapClassName="reservation_modal"
        closable={false}
      >
        <Reservation price={ticketPrice}/>
        <Button onClick={() => setVisible(false)} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </>
  );
};

export default BottomReservation;
