import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const InformationWrapper = styled.div`
  left: 0 0 29px;

  h2 {
    font-weight: bold;
  }

  button {
    font-size: 15px;
    font-weight: 700;
    border: 0;
    padding: 0;
    height: auto;
    line-height: 1;
    box-shadow: none;
    text-shadow: none;
    color: ${themeGet('primary.0', '#616266')};

    &:hover,
    &:focus {
      color: ${themeGet('primary.1', '#399C9F')};
    }

    &::after {
      content: none;
    }
  }
`;

export const Info = styled.div`
  float: left;
  position: absolute;
  left: 0 0 29px;
  width: 100%;
  ul {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
  }
  strong {
    color: ${themeGet('text.0', '#2C2C2C')};
    padding: 0px 50px 0px 0px;
  }
  
`;

export const Img = styled.img`
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default InformationWrapper;
