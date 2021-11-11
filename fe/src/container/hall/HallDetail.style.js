import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HallPageWrapper = styled.div`
  padding-bottom: 56px;
  display: flex;
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
  .btn {
    border: 1px solid #616266;
    border-radius: 5px; 
    background-color: rgba(0,0,0,0);
    color: #616266;
    padding: 5px;
    margin-right: 5px;
  }
  .cancle-btn {
    border: 1px solid #616266;
    border-radius: 5px; 
    background-color: rgba(0,0,0,0);
    color: #616266;
    padding: 5px;
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

export const ButtonBox = styled.div`
  margin-left: 80px;
  margin-top: 30px;
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin: 0 0 4px;
`;

export const Text = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default HallPageWrapper;