import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/exhibition/AddExhibition.style';
import axios from 'axios'
import DatePicker from "react-datepicker"; 
import { EXHBN_DETAIL_PAGE } from 'settings/constant';
import { useHistory } from 'react-router'
import { FileInput } from 'container/index';

const UpdateExhibition = ({ match }) => {
  const history = useHistory()
  const [ exhbnDetail, setExhbnDetail ] = useState([])
  const [ exhbnTitle, setExhbnTitle ] = useState('')
  const [ exhbnGenre, setExhbnGenre ] = useState('')
  const [ hallNum, setHallNum ] = useState(1)
  const [ exhbnPrice, setExhbnPrice ] = useState('')
  const [ exhbnArtist, setExhbnArtist ] = useState('')
  const [ exhbnContent, setExhbnContent ] = useState('')
  const [ startDate, setStartDate ] = useState(new Date())
  const [ endDate, setEndDate ] = useState(new Date())
  const [ exhbnImage, setExhbnImage ] = useState('')
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
  const URL = 'http://localhost:8080/exhbns/'
  useEffect(() => {
    axios.get(URL+match.params.exhbnNum)
    .then((resp) => {
      setExhbnDetail(resp.data)
    })
    .catch((err) => {
      alert(`실패`)
      throw err;
    })
  }, [])

  const updateExhbn = e => {
    e.preventDefault()
    const del = window.confirm("전시를 수정하시겠습니까?")
    { file ? setExhbnImage(file.fileURL) : setExhbnImage('') }
    if(del){
    axios({
      url: URL+match.params.exhbnNum,
      method: 'put',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      },
       data: {
        exhbnTitle, exhbnGenre, hallNum, exhbnPrice, 
        exhbnArtist, exhbnContent, startDate, endDate, exhbnImage,
        totalScore: 0
       }
    })
    .then(resp => {
      alert(`수정 완료`)
      history.push(`${EXHBN_DETAIL_PAGE}/${match.params.exhbnNum}`)
    })
    .catch(err => {
      alert(`수정 실패`)
      throw err;
    })}
  }
    return (
      <form>
        <FormContent>
          <FormHeader>
            <Title>전시회 수정</Title>
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
              >
              <Input name="exhbnTitle" value={exhbnTitle}
                    placeholder={exhbnDetail.exhbnTitle} 
                    onChange = { e => {setExhbnTitle(`${ e.target.value }`)} }/>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
            <FormControl
                label="장소"
                htmlFor="hallNum"
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
              >
              <DatePicker
                name="endDate"
                // value={startDate}
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
              >
              <Input id="exhbnPrice" name="exhbnPrice" value={exhbnPrice} 
                    placeholder ={exhbnDetail.exhbnPrice } 
                    onChange = { e => {setExhbnPrice(`${ e.target.value }`)} }/>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="장르"
                htmlFor="exhbnGenre"
              >
            <select name="exhbnGenre" onChange={ e => {setExhbnGenre(`${ e.target.value }`)} }>
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
              >
              {exhbnDetail && 
              <Input id="exhbnArtist" name="exhbnArtist" value={exhbnArtist}
                    placeholder={exhbnDetail.exhbnArtist} 
                    onChange = { e => {setExhbnArtist(`${ e.target.value }`)} }/> }  
              </FormControl>
            </Col>
          </Row>
          <FormControl
            label="전시 소개"
            htmlFor="exhbnContent"
          >
          <Input.TextArea rows={5} id="exhbnContent" name="exhbnContent" value={exhbnContent}
                    placeholder={exhbnDetail.exhbnContent} 
                    onChange = { e => {setExhbnContent(`${ e.target.value }`)} }/>  
          </FormControl>
        </FormContent>
        <FormAction>
          <div className="inner-wrapper">
            <Button type="submit" htmlType="submit" onClick={ updateExhbn } >
              수정하기
            </Button>
          </div>
        </FormAction>
      </form>
    );  
};

export default UpdateExhibition;