import React, { useState, useCallback } from 'react';
import { FileInput } from 'container/index'
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/exhibition/AddExhibition.style';
import axios from 'axios'
import { useHistory } from 'react-router';
import { HALL_DETAIL_PAGE } from 'settings/constant'

const AddHall = ()  => {
  const history = useHistory()
  const [ hallName, setHallName ] = useState('')
  const [ hallLocation, setHallLocation ] = useState('')
  const [ hallTime, setHallTime ] = useState('')
  const [ hallPnumber, setHallPnumber ] = useState('')
  const [ hallInfo, setHallInfo ] = useState('')
  const [ hallClosed, setHallClosed ] = useState('')
  const [file, setFile] = useState({ 
    fileName: null, 
    fileURL: null 
  });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  }

const URL = 'http://localhost:8080'
const add = e => {
  e.preventDefault()
  const del = window.confirm("새로운 전시관을 등록하시겠습니까?")
  if(del){
  axios({
    url: URL+'/halls', 
    method: 'post',
    headers: {
      'Content-Type'  : 'application/json',
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    },
    data: { hallName, hallLocation, hallTime, hallClosed,
      hallPnumber, hallInfo, hallImage: file.fileURL
    }
  }) 
  .then(resp => {
    alert(`전시관이 등록되었습니다.`)
    history.push(`${HALL_DETAIL_PAGE}/1`)
  })
  .catch(err => {
    alert(`전시관 등록 실패`)
    throw err;
  })}
}

  return (
    <form onSubmit={e => e.preventDefault()}>
      <FormContent>
        <FormHeader>
          <Title>전시관 등록</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="전시관 이미지"
              htmlFor="hallImage"
              >
            <label for="input-file">
            전시관사진 선택
            </label>
            <FileInput onFileChange={onFileChange} name={file.fileName}/> 
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="전시관 이름"
              htmlFor="hallName"
            >
            <Input name="hallName" id="hallName" value={hallName}
                   placeholder="전시관 이름을 입력해주세요." required
                   onChange = { e => {setHallName(`${ e.target.value }`)} }/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="주소"
              htmlFor="hallLocation"
            >
            <Input id="hallLocation" name="hallLocation" value={hallLocation}
                   placeholder="전시관 주소를 입력해주세요." required
                   onChange = { e => {setHallLocation(`${ e.target.value }`)} }/>  
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="운영시간"
              htmlFor="hallTime"
            >
            <Input id="hallTime" name="hallTime" value={hallTime}
                   placeholder="평일(화-금) 10 AM ~ 8 PM
                   토·일·공휴일 10 AM ~ 7 PM" required
                   onChange = { e => {setHallTime(`${ e.target.value }`)} }/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="휴관일"
              htmlFor="hallClosed"
            >
            <Input id="hallClosed" name="hallClosed" value={hallClosed} 
                   placeholder="휴관일을 입력해주세요." required
                   onChange = { e => {setHallClosed(`${ e.target.value }`)} }/>   
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="대표번호"
              htmlFor="hallPnumber"
            >
            <Input id="hallPnumber" name="hallPnumber" value={hallPnumber}
                   placeholder="대표번호를 입력해주세요." required
                   onChange = { e => {setHallPnumber(`${ e.target.value }`)} }/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시관 소개"
          htmlFor="hallInfo"
        >
        <Input.TextArea rows={5} id="hallInfo" name="hallInfo" value={hallInfo}
                  placeholder="전시관 소개글을 입력해주세요." required
                  onChange = { e => {setHallInfo(`${ e.target.value }`)} }/>     
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="submit" htmlType="submit" onClick={ add } >
            등록하기
          </Button>
        </div>
      </FormAction>
    </form>
  );

};

export default AddHall;