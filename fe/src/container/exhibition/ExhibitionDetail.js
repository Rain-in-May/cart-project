import React, { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'library/hooks/useLocation';
import Sticky from 'react-stickynode';
import { Row, Col } from 'antd';
import { Container, Loader } from 'components/index';
import useWindowSize from 'library/hooks/useWindowSize';
import { Description, Review, Notice, Additional, Reservation,
         BottomReservation, TopBar, Summary } from 'container/index';
import SinglePageWrapper, { ButtonBox } from 'container/exhibition/ExhibitionDetail.style';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios'
import { useHistory } from 'react-router';
import { ADD_EXHBN_PAGE, UPDATE_EXHBN_PAGE, EXHBN_ALL_LIST_PAGE } from 'settings/constant';
import { Link } from 'react-router-dom';

const ExhibitionDetail = ({ match }) => {
  const { href } = useLocation();
  const { width } = useWindowSize();
  let history = useHistory();
  const [ exhbnDetail, setExhbnDetail ] = useState([]);
  const [ reviewList, setReivewList ] = useState([]);

  const URL = `http://localhost:8080/`
  
  useEffect(() => {
    axios.get(URL+'exhbns/'+match.params.exhbnNum)
    .then(resp => {
      setExhbnDetail(resp.data)
    })
    .catch(err => {
      alert(`전시 상세페이지 실패: `+err)
      throw err;
    })
    axios.get(URL+'reviews/exhbn/'+match.params.exhbnNum)
    .then(resp => {
      setReivewList(resp.data)
    })
    .catch(err => {
      alert(`리뷰 리스트 실패: `+err)
      throw err;
    })
  }, [])

  if (isEmpty(exhbnDetail)) return <Loader />;

  const deleteExhbn = e => {
    e.preventDefault()
    window.confirm("전시를 삭제하시겠습니까?")
    axios({
      url: URL+'exhbns/'+match.params.exhbnNum,
      method: 'delete',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      }
    })
    .then(resp => {
      alert(`삭제 완료`)
      history.push(EXHBN_ALL_LIST_PAGE)
    })
    .catch(err => {
      alert(`삭제 실패`)
      throw err;
    })
  }

  return (
    <SinglePageWrapper>
       {localStorage.getItem("cartuser") == null ||
        JSON.parse(localStorage.getItem("cartuser")).admin != 1 ? 
        <></>
        : <ButtonBox>
        <Link to={ADD_EXHBN_PAGE}>
        <button className="btn">등록</button>
        </Link>
        <Link to={`${UPDATE_EXHBN_PAGE}/${exhbnDetail.exhbnNum}`}>
        <button className="btn">수정</button>
        </Link>
        <button className="cancle-btn" onClick={ deleteExhbn }>삭제</button>
      </ButtonBox>
        }
        <Container>
        <Row gutter={30}>
          <Col xl={16}>
            <Summary
              title={exhbnDetail.exhbnTitle} 
              number={exhbnDetail.exhbnNum}
              location={exhbnDetail.hallName}
              genre={exhbnDetail.exhbnGenre}
              artist={exhbnDetail.exhbnArtist}
              start={exhbnDetail.startDate}
              end={exhbnDetail.endDate}
              price={exhbnDetail.exhbnPrice}
              rating={exhbnDetail.totalScore}
              ratingCount={exhbnDetail.totalScore}
              shareURL={href} 
              media={exhbnDetail.exhbnImage}
            />
          </Col>
          <Col xl={8}>
            {width > 1200 ? (
              <Sticky
                innerZ={9999}
                activeClass="isSticky"
                top={83}
                bottomBoundary="#reviewSection"
              >
                <Reservation number={exhbnDetail.exhbnNum} price={exhbnDetail.exhbnPrice}/>
              </Sticky>
            ) : (
              <BottomReservation
                title={exhbnDetail.exhbnTitle}
                price={exhbnDetail.exhbnPrice}
                rating={exhbnDetail.totalScore}
                ratingCount={exhbnDetail.totalScore}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Container>
      <TopBar title={exhbnDetail.exhbnTitle} shareURL={href} media={exhbnDetail.exhbnImage} />
      
        <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
          <Col xl={16}>
            <Description
              content={exhbnDetail.exhbnContent}
              title={exhbnDetail.exhbnTitle}
              location={exhbnDetail.hallName}
              rating={exhbnDetail.totalScore}
              ratingCount={exhbnDetail.totalScore}
            />
            <Notice />
          </Col>
        </Row>
        <Row gutter={30}>
          <Col xl={16}>
            <Review
              reviewList={reviewList}
              totalScore={exhbnDetail.totalScore}
              exhbnNum={exhbnDetail.exhbnNum}
            />
          </Col>
          <Col xl={8} />
        </Row>
        <Row gutter={30}>
          <Col xl={16}>
            <Additional />
          </Col>
          <Col xl={8} />
        </Row>
      </Container>
    </SinglePageWrapper>
  );
};

export default ExhibitionDetail;