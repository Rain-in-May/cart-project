import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import { FormControl } from 'components/index';
import { FieldWrapper, SwitchWrapper, Label } from 'container/user/Auth.style';
import { HOME_PAGE } from 'settings/constant'

const SignUpForm = () => {
  const { control } = useForm();
  const history = useHistory();
  const [ userRegister, setUserRegister ] = useState({
    username : "", password : "", name : "", email : "",
    gender : "", birthday : "", phoneNumber : "", preferGenre : ""
  })
  const { username, password, name, email, gender, birthday, phoneNumber, preferGenre } = userRegister
  const onChange = useCallback(e => {
    setUserRegister({...userRegister, [e.target.name]: e.target.value})
  })

  const register = e => {
    e.preventDefault()
    const del = window.confirm("회원가입 하시겠습니까?")
    if(del){
    axios({
      url: `http://localhost:8080/users/signup`,
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Authorization' : 'JWT fefege..'},
      data: userRegister
    })
      .then(resp => {
      alert('회원가입이 완료되었습니다.')
      history.push(HOME_PAGE)
    })
    .catch(err => {
      alert('회원가입 실패')
    })}
  }
  const checkId = e => {
    e.preventDefault()
    axios.get("http://localhost:8080/users/checkId/"+userRegister.username)
    .then(resp => {
      checkMessage(resp.data)
    })
    .catch(err => {
      alert(err)
    })
  }
  const checkEmail = e => {
    e.preventDefault()
    axios.get("http://localhost:8080/users/checkEmail/"+userRegister.email)
    .then(resp => {
      checkMessage(resp.data)
    })
    .catch(err => {
      alert(err)
    })
  }
  const checkMessage = (id) => {
    if(id){
      alert(`이미 존재합니다.`)
    }else{
      alert(`사용 가능합니다.`)
    }
  }

  return (
    <form >
      <FormControl
        label="ID"
      >
        <Input
          onChange = { onChange }
          id="username" 
          name="username" value={username}
          control={control}
          rules={{ required: true }}
        />
        <Button onClick={checkId}>중복확인</Button>
      </FormControl>
      <FormControl
        label="비밀번호"
      >
        <Input.Password 
          onChange = { onChange }
          id="password"
          name="password" value={password}
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 20 }}
        />
      </FormControl>
      <FormControl
        label="이름"
      >
        <Input
          onChange = { onChange }
          id="name" 
          name="name" value={name}
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="이메일 주소"
      >
        <Input
          onChange = { onChange }
          id="email" 
          type="email"
          name="email" value={email}
          placeholder="ex) saram@gmail.com"
          control={control}
          rules={{ required: true }}
        />
        <Button onClick={checkEmail}>중복확인</Button>
      </FormControl>
      <FormControl
        label="성별"
      >
        <select name="gender" value={gender} defaultValue="F" onChange={ onChange }>
          <option value="selection">선택</option>
          <option value="F">여성</option>
          <option value="M">남성</option>
        </select>
      </FormControl>
      <FormControl
        label="생년월일"
      >
        <Input
          onChange = { onChange }
          id="birthday" 
          name="birthday" value={birthday}
          placeholder="ex) 19960731"
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="휴대폰 번호"
      >
        <Input
          onChange = { onChange }
          id="phoneNumber" 
          name="phoneNumber" value={phoneNumber}
          placeholder="ex) 01012345678"
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="선호장르"
      >
        <select name="preferGenre" value={preferGenre} onChange={ onChange }>
          <option value="selection">선택</option>
          <option value="painting">회화</option>
          <option value="media">미디어</option>
          <option value="sculpture">조각</option>
          <option value="craft">공예</option>
          <option value="installation">설치</option>
        </select>
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>아이디 기억하기</Label>
        </SwitchWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="termsAndConditions"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>전체 약관에 동의합니다</Label>
        </SwitchWrapper>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
        onClick= { register }
      >
        <MdLockOpen />
        회원가입
      </Button>
    </form>
  );
};

export default SignUpForm;