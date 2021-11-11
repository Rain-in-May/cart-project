import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const AdditionalWrapper = styled.div`
  padding: 100px 0;
  li {
    margin: 0px 16px;
    padding: 5px 0px;
    list-style-type: disc;
  }
  table {
    width: 100%;
    border: 1px solid ${themeGet('border.3', '#E6E6E6')};
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  th, td {
    border: 1px solid ${themeGet('border.3', '#E6E6E6')};
    padding: 15px;
  }
  th {
    background-color: #f5f5f5;
  }
  strong {
    font-size: 15px;
    color: ${themeGet('text.0', '#2C2C2C')};
  }
  .graybox {
    border: 5px solid #f5f5f5;
    padding: 20px;
  }
  `;

export default AdditionalWrapper;
