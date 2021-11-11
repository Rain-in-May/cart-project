  
import React, { useState , useCallback} from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import { FormControl } from 'components/index';
import { AuthContext } from 'context/index';
import { useHistory } from 'react-router';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { FieldWrapper, SwitchWrapper, Label } from 'container/user/Auth.style';
import { HOME_PAGE } from 'settings/constant';

const SignInForm = () => {
  
  const {control} = useForm();
  const history = useHistory();
  const [userLogin, setUserLogin ] = useState({
    username: "",
    password: ""
  })
  const {username, password} = userLogin
  const onChange = useCallback(e => {
    setUserLogin({...userLogin, [e.target.name]: e.target.value})
  })
  const URL = 'http://localhost:8080';

  const login = e => {
    e.preventDefault()
    axios({
      url: URL+'/users/signin',
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Authorization' : 'JWT fefege..'},
      data: userLogin
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem("cartuser", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        history.goBack()
      } else{
        alert(`토큰값이 없습니다.`)
      }
    })
    .catch(error => {
      alert(error)
    });
  }

  return (
    <form >
      <FormControl
        label="ID"
      >
        <Input
            onChange = {onChange}
          id="username" 
          name="username" value={username}
          defaultValue=""
          control={control}
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        label="비밀번호"
      >
        <Input.Password 
            onChange = {onChange}
          id="password"
          name="password" value={password}
          defaultValue=""
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 20 }}
        />
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="Remember Me"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>자동로그인</Label>
        </SwitchWrapper>
        <Link to={FORGET_PASSWORD_PAGE}>비밀번호 찾기</Link>
      </FieldWrapper>
      
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
        onClick= {login}
      >
        <MdLockOpen />
        Login
      </Button>
    </form>
  );
};

export default SignInForm;