import React, { Fragment, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Button, Input, Rate, Checkbox, Divider, Modal } from 'antd';
import { FormControl } from 'components/index';
import ReviewWrapper, {
  ModalTitle, Form
} from 'container/review/Review.style';
import axios from 'axios';

const UpdateReview = (props) => {
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

  const handleModalOpen = (key) => {
      setState({ ...state, [key]: true })
  };
  const handleModalClose = (key) => {
    setState({ ...state, [key]: false });
  };

  const handleEditReview = e => {
    e.preventDefault()
    const del = window.confirm("내용을 수정하시겠습니까?")
    if(del){
      axios({
        url: URL+props.singleReview.reviewNum,
        method: 'put',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        },
        data: {
          score: score.toString() , reviewContent
        }
      })
      .then(resp => {
        alert(`수정되었습니다.`)
        window.location.reload()
      })
      .catch(err => {
        alert(`수정실패: `+err)
      })
    }
  };
 
  const handleDeleteReview = e => {
      e.preventDefault()
      const del = window.confirm("리뷰를 삭제하시겠습니까?")
      if(del){
        axios({
          url: URL+props.singleReview.reviewNum,
          method: 'delete',
          headers: {
            'Content-Type'  : 'application/json',
            'Authorization' : 'Bearer '+localStorage.getItem("token")
          }
        })
        .then(resp => {
          alert(`삭제되었습니다.`)
          window.location.reload()
        })
        .catch(err => {
          alert(`리뷰 삭제가 실패하였습니다.`)
          throw err;
        })
      }
  }

  const handleChange = value => {
    setScore(value)
  }

  return (<>
    { localStorage.getItem("cartuser") == null ||
     JSON.parse(localStorage.getItem("cartuser")).username != props.singleReview.username ?
     <></> :
    <>
    <button className="btn" onClick={() => handleModalOpen('review')}>수정</button>
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
        error={errors.score && <span>별점을 입력해주세요!</span>}
      >
        <span>
        <Rate 
          tooltips={desc} onChange={handleChange}
          id="score"
          name="score"
          defaultValue={props.singleReview.score}
        />
          {score ? <span className="ant-rate-text">{desc[score - 1]}</span> : ''}
        </span>
      </FormControl>
      <FormControl
        label="내용"
        htmlFor="reviewContent"
        error={errors.reviewContent && <span>This field is required!</span>}
      >
        <Input.TextArea 
          rows={5} onChange = {e => {setReviewContent(`${e.target.value}`)}}
          id="reviewContent"
          name="reviewContent"
          control={control}
          defaultValue={props.singleReview.reviewContent}
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
    </Form></Modal></>
    }
    {(localStorage.getItem("cartuser") == null ||
     (JSON.parse(localStorage.getItem("cartuser")).username != props.singleReview.username) &&
     JSON.parse(localStorage.getItem("cartuser")).admin == null)  ? <></> :
    <button className="cancle-btn" onClick={handleDeleteReview}>삭제</button>}
    </>
  )
};

export default UpdateReview;