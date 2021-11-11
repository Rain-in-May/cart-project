import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { Logo } from 'components/index';
import { LOGIN_PAGE } from 'settings/constant';
import { SignUpForm } from 'container/index';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from 'container/user/Auth.style';

const SignUp = () => {

  return (
    <Wrapper>
      <FormWrapper>
        <Logo
          withLink
          linkTo="/"
          src="/images/cartlogo.png"
        />
        <Title>Welcome To C:ART</Title>
        <TitleInfo>회원가입 정보를 입력해주세요</TitleInfo>
        <SignUpForm /><br/>
        <Text>
          이미 회원입니다. &nbsp;
          <Link to={LOGIN_PAGE}>로그인하러가기</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <img src="/images/signup_page_bg.jpg" alt="Auth page banner" />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignUp;