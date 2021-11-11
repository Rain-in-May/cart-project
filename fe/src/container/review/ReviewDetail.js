import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { Wrapper,  ModalTitle, Form } from 'container/review/Review.style';
import { FormControl } from 'components/index';
import { Row, Button, Input, Rate, Divider, Modal } from 'antd';
import { Rating } from 'components/index';
import { TextLink } from 'container/booking/Booking.style';
import Moment from 'moment';
import 'moment/locale/ko'
import {EXHBN_DETAIL_PAGE} from 'settings/constant'

const ReviewDetail = ({match}) => {
  const [ reviewDetail, setReviewDetail] = useState([])
  const [ score, setScore ] = useState(0)
  const [ reviewContent, setReviewContent ] = useState('')
  const { control, errors, handleSubmit } = useForm({
    mode: 'onChange',
    });
  const URL='http://localhost:8080/reviews/'
  const [state, setState] = useState({
    review: false,
    language: false,
  });
  const desc = ['1', '2', '3', '4', '5'];

  const history = useHistory();

  useEffect(() => {
    axios.get(URL+'review/'+match.params.reviewNum, 
              { headers: { 'Authorization' : 'Bearer '+localStorage.getItem("token")}})
    .then((resp) => {
      setReviewDetail(resp.data)
    })
    .catch((err) => {
      alert(err)
      throw err;
    })
  }, [])

  const handleEditReview = e => {
    e.preventDefault()
    const del = window.confirm("내용을 수정하시겠습니까?")
    if(del){
      axios({
        url: URL+reviewDetail.reviewNum,
        method: 'put',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        },
        data: {
          score: score , reviewContent
        }
      })
      .then(resp => {
        alert(`수정되었습니다.`)
        window.location.reload()
      })
      .catch(err => {
        alert(`수정 실패 `+err)
        throw err;
      })
    }
  };
  
  const handleModalOpen = (key) => {
    setState({ ...state, [key]: true })
    };
    const handleModalClose = (key) => {
    setState({ ...state, [key]: false });
    };

    const handleChange = value => {
        setScore(value)
      }

  const handleDeleteReview = e => {
    e.preventDefault()
    const del = window.confirm("리뷰를 삭제하시겠습니까?")
    if(del){
      axios({
        url: URL+match.params.reviewNum,
        method: 'delete',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        }
      })
      .then(resp => {
        alert(`삭제되었습니다.`)
        history.goBack()
      })
      .catch(err => {
        alert(`리뷰 삭제가 실패하였습니다. `+err)
        throw err;
      })
    }
  }

  const goToList = () => {
      history.goBack()
  }
 
  return ( <>
    <Wrapper>
      <h2>리뷰상세</h2>
      <Divider />
        <Row gutter={48}>
            <ul>
            <li><strong>No.</strong> <br />
            <span>{reviewDetail.reviewNum}</span></li><br />
            <li><strong>전시명</strong> <br />
            <Link to={`${EXHBN_DETAIL_PAGE}/${reviewDetail.exhbnNum}`}>
            <TextLink className="link"> {reviewDetail.exhbnTitle} </TextLink></Link></li>
            <li><strong>별점</strong> <br />
            <span><Rating rating={reviewDetail.score} ratingCount={reviewDetail.score} type="bulk" /></span></li><br />
            <li><strong>내용</strong> <br />
            <span>{reviewDetail.reviewContent}</span></li><br />
            <li><strong>등록일</strong> <br />
            <span>
            {Moment(reviewDetail.regDate).lang('ko').format('YYYY-MM-DD (ddd)')}
            </span>
            </li><br /><br />
            <div>
            <button className="btn" onClick = {goToList}>목록</button>
            <button className="btn" onClick = { () => handleModalOpen('review') }>수정</button>
            <Modal
            visible={state.review}
            onCancel={() => handleModalClose('review')}
            footer={null}
            width="100%"
            maskStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            wrapClassName="review_modal"
            >
            <ModalTitle>리뷰 수정</ModalTitle>
            <Form>
            <FormControl
                label="별점"
                htmlFor="score"
            >
                <span>
                <Rate 
                tooltips={desc} onChange={handleChange}
                id="score"
                name="score"
                defaultValue={reviewDetail.score}
                />
                {reviewDetail.score ? <span className="ant-rate-text">{desc[reviewDetail.score - 1]}</span> : ''}
                </span>
            </FormControl>
            <FormControl
                label="내용"
                htmlFor="reviewContent"
            >
                <Input.TextArea 
                rows={5} onChange = {e => {setReviewContent(`${e.target.value}`)}}
                id="reviewContent"
                name="reviewContent"
                defaultValue=""
                control={control}
                defaultValue={reviewDetail.reviewContent}
                rules={{
                    required: true,
                }}
                />
            </FormControl>
            <FormControl className="submit-container">
                <Button htmlType="submit" type="primary" size="large"
                        onClick = {handleEditReview}>
                작성 완료
                </Button>
            </FormControl>
            </Form></Modal>
            <button className="cancle-btn" onClick = { handleDeleteReview }>삭제</button>
            </div>
            </ul>
            </Row>
        <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </Wrapper>
    
    </>

  );
};


export default ReviewDetail;
