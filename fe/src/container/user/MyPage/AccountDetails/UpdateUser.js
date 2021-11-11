import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { Link, useHistory } from 'react-router-dom';
import Wrapper, { TextInfo, Label, Title, Input } from 'container/user/MyPage/AccountDetails/UpdateUser.style';
import { DragAndDropUploader, FormControl } from 'components/index';
import { Row, Col, Divider } from 'antd';
import { MyResponsivePie } from 'container/index'
import { FormHeader, FormContent, FormAction } from 'container/exhibition/AddExhibition.style';


const UpdateUser = (props) => {
    const history = useHistory();
    const [ user, setUser ] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [preferGenre, setPreferGenre] = useState('')
    const editUser = () => {
        setUser(JSON.parse(localStorage.getItem("cartuser")))
    } 
    const URL = `http://localhost:8080/users/`
    const userEdit = e => {
        e.preventDefault()
        const del = window.confirm("정보를 수정하시겠습니까?")
        if(del){
        axios({
            url: URL+user.userNum,
            method: 'put',
            headers: {'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem("token")},
            data: {userNum: user.userNum, username, password, name: user.name, email, gender:user.gender, birthday:user.birthday, 
                   phoneNumber, admin:user.admin, preferGenre}
        }).then(res => {
            alert(`수정되었습니다.`)
            getChangeUser()
            history.push('/profile/update-user')
            window.location.reload()
        }).catch(err => {
            alert(err)
        })}
    }
    const userDelete = e => {
        e.preventDefault()
        const del = window.confirm("정말 탈퇴하시겠습니까?")
        if(del){
        axios({
            url: URL+user.userNum,
            method: 'delete',
            headers: {'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem("token")}
        }).then(res => {
            alert(`탈퇴되었습니다.`)
            localStorage.removeItem("cartuser")
            localStorage.removeItem("token")
            history.push('/')
        }).catch(err => {
            alert(err)
        })}
    }
    const getChangeUser = () => {
      axios({
        url: URL+user.userNum, 
        method: 'get',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        }
      }) 
      .then(resp => {
        localStorage.setItem("cartuser", JSON.stringify(resp.data))
        window.location.reload()
      })
      .catch(err => {
        alert(`프로필사진 등록 실패`+err)
        throw err;
      })
    }
    useEffect(()=>editUser(), [])
    return (
        <Wrapper>
        <Divider />
          <FormContent>
          <FormHeader>
          <Title>회원정보 수정</Title>
        </FormHeader>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="아이디"
              >
              <div>{user.username}</div>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="비밀번호"
              >
              <Input name="password" value={password}
                     placeholder = '*******'
                     onChange={e => setPassword(e.target.value)} required/>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="이름"
              >
              <div>{user.name}</div>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="이메일"
              >
              <Input name="email" defaultValue={user.email}
                     placeholder={user.email}
                     onChange={e => setEmail(e.target.value)} required/>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="성별"
              >
              <div>{user.gender}</div>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="생년월일"
              >
              <div>{user.birthday}</div>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="전화번호"
              >
              <Input name="phoneNumber" defaultValue={user.phoneNumber}
                     placeholder={user.phoneNumber}
                     onChange={e => setPhoneNumber(e.target.value)} required/>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <FormControl
                label="선호장르"
              >
          <select name="preferGenre" value={preferGenre} 
                  onChange={ e => setPreferGenre(e.target.value) }>
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
          </FormContent>
          <div className="container">
          <button className="btn" onClick = { userEdit }>수정</button>
          <button className="cancle-btn" onClick = { userDelete }>회원탈퇴</button>
          </div>
        <Divider> C:ART  |  Seoul Museum of Art </Divider>
      </Wrapper>
      
  
    );
}

export default UpdateUser