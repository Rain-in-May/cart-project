import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Rate, Checkbox, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import RadioGroup from 'components/UI/RadioGroup/RadioGroup';
import DragAndDropUploader from 'components/UI/ImageUploader/DragAndDropUploader';
import { Form, Label, GroupTitle, Description } from 'container/review/Review.style';
import axios from 'axios';

const ReviewForm = (props) => {
  const { control, register, errors, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    });
  
  const [ reviewTitle, setReviewTitle ] = useState('')
  const [ reviewContent, setReviewContent ] = useState('')
  const [ regDate ] = useState(new Date())
  const [ score, setScore ] = useState(0)
  const desc = ['1', '2', '3', '4', '5'];
  const user = JSON.parse(localStorage.getItem("cartuser"))

  const onSubmit = e => {
    const del = window.confirm("등록 하시겠습니까?")
    if(del){
    axios({
        url: `http://localhost:8080/reviews`,
        method: 'post',
        headers: {'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem("token")},
        data: { reviewTitle, reviewContent, regDate, 
                score, userNum: user.userNum, exhbnNum:props.exhbnNum }
    }).then(res => {
        alert(`리뷰가 등록되었습니다.`)
        window.location.reload()
    }).catch(err => {
        alert(err.response)
    })}
  };

  const handleChange = value => {
    setScore(value)
  }
  

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="별점"
        htmlFor="score"
        error={errors.score && <span>별점을 입력해주세요!</span>}
      >
        <span>
        <Rate 
          tooltips={desc} onChange={ handleChange }
          id="score"
          name="score"
          defaultValue=""
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
          defaultValue=""
          control={control}
          placeholder="전시회는 어떠셨나요?"
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl>
        <Controller
          name="termsAndCondition"
          onChange={([e]) => {
            return e.target.checked;
          }}
          as={
            <Checkbox>
              게시판 운영 규정에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드 처리될 수 있습니다.
              특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일 등의 개인정보는 
              악용될 우려가 있으므로 게시를 삼가 주시기 바랍니다.
              사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우 C:ART 게시판 
              작성 권한이 제한됩니다.
            </Checkbox>
          }
          control={control}
        />
      </FormControl>
      <FormControl className="submit-container">
        <Button htmlType="submit" type="primary" size="large">
          작성 완료
        </Button>
      </FormControl>
    </Form>
  );
};

export default ReviewForm;

/*
      <FormControl
        label="제목"
        htmlFor="reviewTitle"
        error={errors.reviewTitle && <span>This field is required!</span>}
      >
        <Input 
          onChange = {e => {setReviewTitle(`${e.target.value}`)}}
          id="reviewTitle"
          name="reviewTitle"
          defaultValue=""
          control={control}
          placeholder="전시회 제목을 입력해주세요"
          rules={{
            required: true,
          }}/>
      </FormControl>
*/