import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { FileInput } from 'container/index'
import { FormControl } from 'components/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/exhibition/AddExhibition.style';
import axios from 'axios'
import { HALL_DETAIL_PAGE } from 'settings/constant'
import { useHistory } from 'react-router'

const UpdateHall = ({ match }) => {
  const history = useHistory()
  const [ hallDetail, setHallDetail] = useState({})
  const [ updateHallData, setUpdateHallData ] = useState({
    hallName: "", hallLocation: "", hallTime: "", hallClosed: "", 
    hallPnumber: "", hallInfo: "", hallImage: ""
  })
  const { hallName, hallLocation, hallTime, hallClosed,
    hallPnumber, hallInfo, hallImage } = updateHallData
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
  const onChange = useCallback(e => {
    setUpdateHallData({...updateHallData, [e.target.name]: e.target.value})
  })

  useEffect(e => {
    axios.get("http://localhost:8080/halls/find/"+match.params.hallNum)
    .then((resp) => {
      setHallDetail(resp.data)
    })
    .catch((err) => {
      alert(`실패`)
      throw err;
    })
  }, [])

  const updateHall = e => {
    e.preventDefault()
    window.confirm("전시관을 수정하시겠습니까?")
    axios({
      url: 'http://localhost:8080/halls/'+match.params.hallNum,
      method: 'put',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      },
      data: updateHallData
    })
    .then(resp => {
      alert(`수정 완료`)
      history.push(`${HALL_DETAIL_PAGE}/${match.params.hallNum}`)
    })
    .catch(err => {
      alert(`수정 실패`)
      throw err;
    })
  }

  return (
    <form>
      <FormContent>
        <FormHeader>
          <Title>전시관 수정</Title>
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
            <Input name="hallName" value={hallName}
                  placeholder={hallDetail.hallName}
                  onChange = { onChange }/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="주소"
              htmlFor="hallLocation"
            >
            <Input name="hallLocation" value={hallLocation}
                  placeholder={hallDetail.hallLocation} 
                  onChange = { onChange }/>  
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
                  placeholder={hallDetail.hallTime} 
                  onChange = { onChange }/>    
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
                  placeholder={hallDetail.hallClosed} 
                  onChange = { onChange }/>   
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
                  placeholder={hallDetail.hallPnumber} 
                  onChange = { onChange }/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시관 소개"
          htmlFor="hallInfo"
        >
        <Input.TextArea rows={5} id="hallInfo" name="hallInfo" value={hallInfo}
                  placeholder={hallDetail.hallInfo} 
                  onChange = { onChange }/>     
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="submit" htmlType="submit" onClick={ updateHall } >
            수정하기
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default UpdateHall;