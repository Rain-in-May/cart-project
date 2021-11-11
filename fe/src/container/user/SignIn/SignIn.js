import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { Logo } from 'components/index';
import { REGISTRATION_PAGE } from 'settings/constant';
import { SignInForm } from 'container/index';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from 'container/user/Auth.style';

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo
          withLink
          linkTo="/"
          src="/images/cartlogo.png"
        />
        <Title>Welcome Back</Title>
        <TitleInfo>로그인 정보를 입력해주세요</TitleInfo>
        <SignInForm /><br/>
        <Text>
          계정이 없으신가요?&nbsp;
          <Link to={REGISTRATION_PAGE}>회원가입하기</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <img src="/images/signup_page_bg.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignIn;
