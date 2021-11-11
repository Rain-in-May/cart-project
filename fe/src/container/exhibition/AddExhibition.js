import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/exhibition/AddExhibition.style';
import DatePicker from "react-datepicker"; 
import axios from 'axios'
import { EXHBN_ALL_LIST_PAGE } from 'settings/constant'
import { useHistory } from 'react-router'
import { FileInput } from 'container/index';


const AddExhibition = ({ })  => {
  const { errors } = useForm();
  const history = useHistory();
  const [ exhbnTitle, setExhbnTitle ] = useState('')
  const [ exhbnGenre, setExhbnGenre ] = useState('')
  const [ hallNum, setHallNum ] = useState(1)
  const [ exhbnPrice, setExhbnPrice ] = useState('')
  const [ exhbnArtist, setExhbnArtist ] = useState('')
  const [ exhbnContent, setExhbnContent ] = useState('')
  const [ startDate, setStartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
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
    const del = window.confirm("전시회를 등록하시겠습니까?")
    if(del){
    axios({
      url: URL+'/exhbns/add', 
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      },
      data: { exhbnTitle, exhbnGenre, hallNum, exhbnPrice, 
        exhbnArtist, exhbnContent, startDate, endDate, exhbnImage: file.fileURL,
        totalScore: 0}
    }) 
    .then(resp => {
      alert(`전시 등록 완료`)
      history.push(EXHBN_ALL_LIST_PAGE)
    })
    .catch(err => {
      alert(`전시 등록 실패`)
      throw err;
    })}
  }
  
  return (
    <form onSubmit={e => e.preventDefault()}>
      <FormContent>
        <FormHeader>
          <Title>전시회 등록</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="전시 포스터"
              htmlFor="exhbnImage"
              >
            <label for="input-file">
            전시사진 선택
            </label>
            <FileInput onFileChange={onFileChange} name={file.fileName}/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="제목"
              htmlFor="exhbnTitle"
              // error={errors.exhbnTitle && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input name="exhbnTitle" id="exhbnTitle" 
                   placeholder="전시 제목을 입력해주세요." 
                   onChange = { e => {setExhbnTitle(`${ e.target.value }`)} }  required="required"/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="장소"
              htmlFor="hallNum"
              // error={errors.hallLocation && <span>이 입력란을 작성해주세요!</span>}
            >
            <select name="hallNum" onChange={ e => {setHallNum(`${ e.target.value }`)} }>
              <option value="selection">선택</option>
              <option value="1">서소문본관</option>
              <option value="2">북서울미술관</option>
              <option value="3">남서울미술관</option>
              <option value="4">난지미술창작스튜디오</option>
              <option value="5">SeMA창고</option>
              <option value="6">백남준기념관</option>
              <option value="7">SeMA벙커</option>
            </select>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="시작 날짜"
              htmlFor="startDate"
              // error={errors.startDate && <span>이 입력란을 작성해주세요!</span>}
            >
            <DatePicker
              name="startDate"
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="종료 날짜"
              htmlFor="endDate"
              error={errors.endDate && <span>이 입력란을 작성해주세요!</span>}
            >
            <DatePicker
              name="endDate"
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={date => setEndDate(date)}
              minDate={startDate}
            />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="가격"
              htmlFor="exhbnPrice"
              // error={errors.exhbnPrice && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnPrice" name="exhbnPrice"
                   placeholder="전시 가격을 입력해주세요." required
                   onChange = { e => {setExhbnPrice(`${ e.target.value }`)} }/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장르"
              htmlFor="exhbnGenre"
              // error={errors.exhbnGenre && <span>이 입력란을 작성해주세요!</span>}
            >
          <select name="exhbnGenre" defaultValue="painting" onChange={ e => {setExhbnGenre(`${ e.target.value }`)} }>
            <option value="selection">선택</option>
            <option value="painting">회화</option>
            <option value="media">미디어</option>
            <option value="sculpture">조각</option>
            <option value="craft">공예</option>
            <option value="installation">설치</option>
          </select>  
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="작가"
              htmlFor="exhbnArtist"
              // error={errors.exhbnArtist && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnArtist" name="exhbnArtist"
                   placeholder="작가명을 입력해주세요." required
                   onChange = { e => {setExhbnArtist(`${ e.target.value }`)} }/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시 소개"
          htmlFor="exhbnContent"
          error={errors.exhbnContent && <span>이 입력란을 작성해주세요!</span>}
        >
        <Input.TextArea rows={5} id="exhbnContent" name="exhbnContent"
                  placeholder="전시 소개글을 입력해주세요." required
                  onChange = { e => {setExhbnContent(`${ e.target.value }`)} }/>     
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

export default AddExhibition;