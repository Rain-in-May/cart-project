import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ReviewWrapper = styled.div`
  padding: 29px 0;
  .ant-row {
    margin-bottom: -29px;
    > div {
      margin-bottom: 29px;
    }
  }
  /* comment area style */
  .comment-area {
    .comment-wrapper {
      padding: 20px 0;
      /* comment header style */
      .comment-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        @media (max-width: 480px) {
          margin-bottom: 18px;
        }
        .avatar-area {
          display: flex;
          align-items: center;
          .author-avatar {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 20px;
            @media (max-width: 480px) {
              width: 50px;
              height: 50px;
              margin-right: 10px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .author-info {
            .author-name {
              color: ${themeGet('text.0', '#2C2C2C')};
              font-size: 15px;
              font-weight: 700;
              line-height: 18px;
              @media (max-width: 480px) {
                margin: 0 0 6px;
              }
            }
            .comment-date {
              color: ${themeGet('text.2', '#777777')};
              font-size: 13px;
              line-height: 16px;
            }
          }
        }
        .rating-area {
          > span {
            margin-right: 15px;
            color: ${themeGet('text.2', '#777777')};
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      /* comment body style */
      .comment-body {
        h4 {
          color: ${themeGet('text.0', '#2C2C2C')};
          font-size: 15px;
          font-weight: 700;
          line-height: 18px;
          margin-bottom: 7px;
          @media (max-width: 767px) {
            line-height: 26px;
            margin-bottom: 10px;
          }
        }
        p {
          color: ${themeGet('text.0', '#2C2C2C')};
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 19px;
        }
      }
      /* comment rating style */
      .comment-rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 667px) {
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .rating-widget {
          display: flex;
          align-items: center;
          @media (max-width: 667px) {
            margin: 5px 0;
          }
          span {
            font-size: 13px;
            font-weight: 700;
            color: ${themeGet('text.0', '#2C2C2C')};
            margin-right: 10px;
            @media (max-width: 480px) {
              min-width: 80px;
              font-size: 14px;
            }
          }
          svg {
            fill: ${themeGet('primary.0', '#616266')};
          }
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
display: flex;
align: center;
flex-wrap: wrap;
width: 50%;
margin-left: 300px;
margin-top: 50px;

.container {
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  border: 1px solid #616266;
  border-radius: 5px; 
  background-color: rgba(0,0,0,0);
  color: #616266;
  padding: 5px;
  margin-left: 2px;
}

.cancle-btn {
  border: 1px solid #616266;
  border-radius: 5px; 
  background-color: rgba(0,0,0,0);
  color: #616266;
  padding: 5px;
  margin-left: 2px;
}

.btn:hover {
  border: 1px solid #549400;
  color: #549400;
  cursor: pointer;
}

.cancle-btn:hover {
  border: 1px solid #b00000;
  color: #b00000;
  cursor: pointer;
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


export const FilterElement = styled.div`
  font-size: 13px;
  color: ${themeGet('text.0', '#2C2C2C')};
  line-height: 16px;
  margin: 19px 0;
  &:last-child {
    margin-bottom: 0;
  }
  margin-top:10px;
  /* checkbox component style */
  .ant-checkbox-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    .ant-checkbox {
      flex-shrink: 0;
      .ant-checkbox-inner {
        border-radius: 0;
        border-color: ${themeGet('text.1', '#909090')};
      }
      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          border-color: ${themeGet('primary.0', '#616266')};
          background-color: ${themeGet('primary.0', '#616266')};
        }
      }
      &::after {
        display: none;
      }
    }
    > span {
      &:last-child {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: left;
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 0px;
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
    margin-left: 3px;
    margin-top: -1px;
  }
  p{
    width: 95px;
  }
`;

export const RatingWrapper = styled.span`
  width: 80px;
  display: inline-flex;
  align-items: center;
  flex: 1;
  color: ${themeGet('primary.0', '#616266')};
  p {
    margin-top: 20px;
  }
`;

export const PopoverWrapper = styled.span`
  font-size: 13px;
  div {
    margin-top: 5px;
    align-items: right;
  }
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
  @media (max-width: 736px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const RatingStatus = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 736px) {
    margin-bottom: 15px;
  }
  i {
    font-size: 18px;
    color: ${themeGet('primary.0', '#616266')};
    position: relative;
    top: 1px;
  }
  svg {
    width: 21px;
    height: 21px;
    fill: ${themeGet('primary.0', '#616266')};
    margin-right: 2px;
    position: relative;
    top: 1px;
  }
`;

export const RatingSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* input search style */
  .ant-input-search {
    width: calc(100% - 165px);
    margin-right: 30px;
    .ant-input {
      color: ${themeGet('text.0', '#2C2C2C')};
      &::placeholder {
        color: ${themeGet('text.1', '#909090')};
      }
    }
    .ant-input-suffix {
      left: 18px;
      right: auto;
      color: ${themeGet('text.1', '#909090')};
    }
    &:hover {
      border-color: ${themeGet('border.3', '#E6E6E6')};
    }
  }
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: ${themeGet('border.3', '#E6E6E6')};
    box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);
  }
  /* button style */
  button {
    &.ant-btn {
      flex-shrink: 0;
      &.ant-btn-primary {
        height: 37px;
        min-width: 133px;
        border-color: ${themeGet('primary.0', '#616266')};
        background-color: ${themeGet('primary.0', '#616266')};
        text-shadow: none;
        font-size: 15px;
        font-weight: 700;
        border-radius: 3px;
        line-height: 1;
      }
    }
  }
`;

export const TextButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${themeGet('primary.0', '#616266')};
  font-size: 13px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  svg {
    width: 15px;
    height: 15px;
    margin-left: 4px;
    fill: ${themeGet('primary.0', '#616266')};
    position: relative;
    top: 1px;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin-bottom: 40px;
  @media (max-width: 1260px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const Label = styled.h3`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const GroupTitle = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 22px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
  span {
    color: ${themeGet('text.1', '#909090')};
    font-weight: 400;
  }
`;

export const Description = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  @media (max-width: 767px) {
    line-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  .form-control {
    margin-bottom: 30px;
    &.radio-group-area {
      .ant-row {
        @media (max-width: 991px) {
          flex-direction: column;
          margin-bottom: 30px;
          h3 {
            font-weight: 700;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  .optional-section {
    margin-top: 50px;
    margin-bottom: 35px;
  }
  .drag_and_drop_uploader {
    /* uploader style */
    .ant-upload {
      min-height: 197px;
      &.ant-upload-drag {
        border-color: ${themeGet('border.3', '#E6E6E6')};
        background-color: ${themeGet('color.1', '#ffffff')};
        &:hover {
          border-color: ${themeGet('primary.0', '#616266')};
        }
        .ant-upload-drag-icon {
          font-size: 48px;
          line-height: 1;
          margin-bottom: 0;
          color: ${themeGet('border.3', '#E6E6E6')};
        }
        .ant-upload-text {
          margin-bottom: 0;
          font-size: 17px;
          color: ${themeGet('text.1', '#909090')};
          font-weight: 700;
          line-height: 34px;
          span {
            text-decoration: underline;
          }
        }
      }
    }
    /* uploaded image style */
    .ant-upload-list {
      padding-top: 15px;
      .ant-upload-list-item {
        height: 40px;
        margin-top: 0;
        line-height: 50px;
        &.ant-upload-list-item-done {
          .ant-upload-list-item-info {
            a {
              color: ${themeGet('primary.0', '#616266')};
            }
          }
        }
        .ant-upload-list-item-info {
          font-size: 15px;
          font-weight: 600;
          border-radius: 3px;
          .anticon-paper-clip {
            font-size: 15px;
            top: 12px;
          }
        }
        &:hover {
          .ant-upload-list-item-info {
            background-color: ${themeGet('color.2', '#F7F7F7')};
          }
        }
        .ant-upload-list-item-card-actions {
          font-size: 15px;
          top: -5px;
        }
      }
    }
  }
  .ant-checkbox-wrapper {
    .ant-checkbox {
      + span {
        font-weight: 400;
      }
    }
  }
  .submit-container {
    margin-top: 40px;
    margin-bottom: 0;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  align: left;
  flex-wrap: wrap;
  margin-left: 50px;
  margin-top: 20px;
  width: 150%;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    border: 1px solid #616266;
    border-radius: 5px; 
    background-color: rgba(0,0,0,0);
    color: #616266;
    padding: 5px;
    margin-left: 2px;
  }

  .cancle-btn {
    border: 1px solid #616266;
    border-radius: 5px; 
    background-color: rgba(0,0,0,0);
    color: #616266;
    padding: 5px;
    margin-left: 2px;
  }
  
  .btn:hover {
    border: 1px solid #549400;
    color: #549400;
    cursor: pointer;
  }

  .cancle-btn:hover {
    border: 1px solid #b00000;
    color: #b00000;
    cursor: pointer;
  }

`;

export const Title2 = styled.h2`
  color: ${themeGet('text.4', '#777777')};
  font-size: 20px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0px;
  margin-right: 800px;
`;

export default ReviewWrapper;