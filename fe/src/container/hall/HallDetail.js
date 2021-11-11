import React, { useState, useEffect } from 'react';
import { useLocation } from 'library/hooks/useLocation';
import { Row } from 'antd';
import { Container, Loader } from 'components/index';
import useWindowSize from 'library/hooks/useWindowSize';
import { useHistory } from 'react-router';
import isEmpty from 'lodash/isEmpty';
import { HallInformation, VerticalTab } from 'container/index';
import HallPageWrapper from 'container/hall/HallDetail.style';
import axios from 'axios'

const HallDetail = ({ match }) => {
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();
  const [ props ] = useState([])
  const [ hallDetail, setHallDetail ] = useState([])

  const URL = `http://localhost:8080/halls/find/`

  useEffect(e => {
    axios.get(URL+match.params.hallNum)
    .then(resp => {
      setHallDetail(resp.data)
    })
    .catch(err => {
      alert(`전시관 진입 실패`)
      throw err;
    })
  }, [])

  if (isEmpty(hallDetail)) return <Loader />;

  const {
    title,
    content,
  } = props;

  return (
    <HallPageWrapper>
      <Container>
        <Row gutter={30}>
          <VerticalTab />
          <HallInformation
            title={hallDetail.hallName}
            content={hallDetail.hallInfo}
            time={hallDetail.hallTime}
            closedday={hallDetail.hallClosed}
            address={hallDetail.hallLocation}
            pnumber={hallDetail.hallPnumber}
            media={hallDetail.hallImage}
            num={hallDetail.hallNum}
          />
        </Row>
      </Container>
    </HallPageWrapper>
  );
};

export default HallDetail;