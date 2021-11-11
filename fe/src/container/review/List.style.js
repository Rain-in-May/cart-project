import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Wrapper = styled.div`
  display: flex;
  align: center;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 100px;
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

export const ListWrapper = styled.div`
  display: flex;
  align: left;
  flex-wrap: wrap;
  width: 150%;
  margin-left: 50px;
  margin-top: 20px;

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

export const Title = styled.h2`
  color: ${themeGet('text.4', '#777777')};
  font-size: 20px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0px;
  margin-right: 800px;
`;

export const TableWrapper = styled.div`
  .ant-table-column-sorters{
    width: 135px;
  }
`

export default Wrapper;
