import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoIosStar, IoIosStarOutline, IoIosArrowDown } from 'react-icons/io';
import { Row, Col, Button, Input, Checkbox, Divider, Modal } from 'antd';
import { Heading, Rating, Text } from 'components/index';
import { ReviewForm, UpdateReview, CommentCard, Pagination } from 'container/index';
import ReviewWrapper, {
  HeaderSection,
  RatingStatus,
  FilterElement,
  RatingSearch,
  RatingWrapper,
  TextButton,
  ModalTitle,
} from 'container/review/Review.style';
import { Element } from 'react-scroll';
import axios from 'axios';

const Search = Input.Search;
const CommentBox = ( props ) => {
  const { reviews, exhbnNum } = props;
  return reviews && reviews.length !== 0
    ? reviews.map((singleReview, i) => {
        return (
          <Fragment key={i}>
            <Divider />
            <CommentCard singleReview={singleReview} />
            <UpdateReview singleReview={singleReview}/>
          </Fragment>
        );
      })
    : '리뷰가 없습니다.';
};

const Review = (props) => {
  const { reviewList, totalScore, exhbnNum } = props
  const {
    statusHeadingStyle,
    filterHeadingStyle,
    ratingLabelStyle,
    ratingCountStyle,
  } = props;

  const [state, setState] = useState({
    review: false,
    language: false,
  });
  const handleModalOpen = (key) => {
    { localStorage.getItem("token") != null ? 
      setState({ ...state, [key]: true })
    : 
      alert('로그인 후 작성 가능합니다.')
    }
  };
  const handleModalClose = (key) => {
    setState({ ...state, [key]: false });
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  const [ scoreCount, setScoreCount ] = useState([])
  const URL = 'http://localhost:8080/'
  useEffect(() => {
    axios.get(URL+'analyses/review/'+props.exhbnNum)
    .then(resp => {
      setScoreCount(resp.data)
    })
    .catch(err => {
      alert(`리뷰 통계 실패: `+err)
      throw err;
    })
  }, [])

  return (
    <Element name="reviews" className="reviews">
      <ReviewWrapper>
        <HeaderSection>
          <RatingStatus>
            <Heading
              content={`이용평점 ${totalScore}`}
              {...statusHeadingStyle}
            />
            <Rating rating={totalScore} rationgCount={totalScore} type='bulk'/>
          </RatingStatus>
          <RatingSearch>
            <Search
              placeholder="리뷰검색"
              onSearch={(value) => console.log(value)}
            />
            <Button type="primary" onClick={() => handleModalOpen('review')}>
              이용후기 작성
            </Button>
            <Modal
              visible={state.review}
              onCancel={() => handleModalClose('review')}
              footer={null}
              width="100%"
              maskStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              wrapClassName="review_modal"
            >
              <ModalTitle>리뷰를 작성해주세요</ModalTitle>
              <ReviewForm exhbnNum={exhbnNum}/>
            </Modal>
          </RatingSearch>
        </HeaderSection>
        <Row gutter={20}>
          <Col sm={12} lg={9}>
          <Heading content="점수별 관람객 수" {...filterHeadingStyle} style={{'margin-bottom':'20px'}}/>
              <FilterElement>
                <Text content="5점  " as="span" {...ratingCountStyle} />
                <RatingWrapper>
                  <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                  <Text content={scoreCount.score5} as="span" {...ratingCountStyle} 
                        style={{'margin-left':'3px'}}/>
                </RatingWrapper>
                </FilterElement>
                <FilterElement>
                <Text content="4점  " as="span" {...ratingCountStyle} />
                <RatingWrapper>
                  <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                  <Text content={scoreCount.score4} as="span" {...ratingCountStyle} 
                        style={{'margin-left':'3px'}}/>
                </RatingWrapper>
                </FilterElement>
                <FilterElement>
                <Text content="3점  " as="span" {...ratingCountStyle} />
                <RatingWrapper>
                  <IoIosStar /><IoIosStar /><IoIosStar />
                  <Text content={scoreCount.score3} as="span" {...ratingCountStyle} 
                        style={{'margin-left':'3px'}}/>
                </RatingWrapper>
                </FilterElement>
                <FilterElement>
                <Text content="2점  " as="span" {...ratingCountStyle} />
                <RatingWrapper>
                  <IoIosStar /><IoIosStar />
                  <Text content={scoreCount.score2} as="span" {...ratingCountStyle} 
                        style={{'margin-left':'3px'}}/>
                </RatingWrapper>
                </FilterElement>
                <FilterElement>
                <Text content="1점  " as="span" {...ratingCountStyle} />
                <RatingWrapper>
                  <IoIosStar />
                  <Text content={scoreCount.score1} as="span" {...ratingCountStyle}
                        style={{'margin-left':'3px'}} />
                </RatingWrapper>
            </FilterElement>
          </Col>
        </Row>
        <CommentBox reviews={reviewList}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={reviewList.length} paginate={setCurrentPage}/>
      </ReviewWrapper>
    </Element>
  );
};

Review.propTypes = {
  statusHeadingStyle: PropTypes.object,
  filterHeadingStyle: PropTypes.object,
  ratingLabelStyle: PropTypes.object,
  ratingCountStyle: PropTypes.object,
};

Review.defaultProps = {
  statusHeadingStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    mr: '10px',
  },
  filterHeadingStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '1.2',
    mb: '0.5em',
  },
  ratingLabelStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    flex: '1',
  },
  ratingCountStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    ml: '8px',
  },
};

export default Review;