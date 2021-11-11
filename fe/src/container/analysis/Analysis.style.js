import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Wrapper = styled.div`
  height: 1500px;
  display: flex;
  align: center;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 100px;
  .left {
    width: 40%;
    height: 350px;
    float: left;
    box-sizing: border-box;
    margin-bottom: 50px;
    }
  .right {
      width: 60%;
      height: 400px;
      float: right;
      box-sizing: border-box;
      margin-bottom: 50px;
  }
  .top {
    width: 100%;
    height: 400px;
    margin-bottom: 70px;
}
.bottom {
    width: 80%;
    height: 400px;
    margin-bottom: 80px;
}
  h4{
      font-size: 15px;
      text-align: center;
      font-weight: bold;
  }
  h3{
    font-size: 20px;
    font-weight: bold;
    color: #524c4c;
  }
`;

export const SettingWrapper = styled.div`
  height: 200px;
`;
