import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { style } from 'styled-system';

const SummaryWrapper = styled.div`
  box-sizing: border-box;
`;

export const PosterBox = styled.div`
  float: left;
  width: 45%;
  margin-top: 70px;
  
`;

export const InfoBox = styled.div`
  float: left;
  width: 55%;
  margin-top: 70px;
`;

export const PosterImage = styled.div`
  height: 400px;
  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    float: left;
    @media (max-width: 1200px) {
      width: 300px;
      height: 400px;
      position: absolute;
    }
  }
`;

export const Info = styled.div`
  padding-left: 20px;
  height: 450px;
  @media (max-width: 1200px) {
    position: relative;
    left: 100px;
  }
  ul {
  
  }
  
  li {
    display: flex;
    flex-flow: column;
  }
  strong {
    font-size: 15px;
    margin-right: 50px;
  }
  span {
    font-size: 15px;
    position: relative;
    bottom: 23px;
    left: 70px;
    max-width: 300px;
    @media (max-width: 1200px) {
      max-width: 400px;
    }
  }
  
`;

export const ButtonGroup = styled.div`
  height: 50px;
  button,
  button.ant-btn {
    box-shadow: none;
    border: 0;
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    svg {
      width: 20.309px;
      height: 15.537px;
      margin-right: 10px;
      path {
        fill: transparent;
        stroke: ${themeGet('text.0', '#2C2C2C')};
        stroke-width: 1.2px;
      }
    }
    &.active {
      svg {
        path {
          stroke: ${themeGet('color.4', '#FC5C63')};
          fill: ${themeGet('color.4', '#FC5C63')};
        }
      }
    }
    &:focus {
      outline: none;
    }
    
    &:after {
      display: none;
    }
    &:first-child {
      position: relative;
      left: -8px;
      svg {
        position: relative;
        top: 0px;
        path {
          stroke-width: 1.5px;
        }
      }
    }
    &:last-child {
      margin-left: 145px;
      @media (max-width: 767px) {
        position: relative;
        left: 89px;
        bottom: 27px;
      }
      @media (max-width: 1200px) {
        position: relative;
        left: 89px;
        bottom: 27px;
      }
    }
  }
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: left;
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 3px;
  width: 100%;
  @media (max-width: 767px) {
  }
  i {
    color: ${themeGet('primary.0', '#616266')};
  }
  svg {
    fill: ${themeGet('primary.0', '#616266')};
  }
  strong {
    font-weight: 700;
    margin-left: 0px;
    margin-top: -1px;
  }
  p{
    width: 95px;
  }
`;

export default SummaryWrapper;