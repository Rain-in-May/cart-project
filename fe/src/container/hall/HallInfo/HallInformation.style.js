import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HallWrapper = styled.div`
  padding: 30px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 75%;

  
  img {
    width: 100%;
    position: relative;
    object-fit: contain;
  
    @media (max-width: 1200px) {
      height: 406px;
    }
  }

  .hallInfo {
    max-width: 88%;
    margin-top: 50px;

    @media (max-width: 1200px) {
      width: 75%;
      position: relative;
      left: 100px;
    }
  }

  .hallSum {
    margin-top: 50px;

    @media (max-width: 1200px) {
      width: 75%;
      position: relative;
      left: 100px;
    }

    li {
      list-style-type: disc;
    }

    ul {
      color: ${themeGet('text.0', '#2C2C2C')};
      font-size: 15px;
      margin-left: 20px;
    }
  
    strong {
      color: ${themeGet('text.0', '#2C2C2C')};
      padding: 0px 50px 0px 0px;
    }
  }

  .wrap {
    text-align: center;
    position: relative;
    left: 20rem;
    bottom: 3.5rem;

    @media (max-width: 1200px) {
      position: relative;
      left: 0px;
      bottom: 0px;
      top: 70px;
      margin-bottom: 100px;
    }

    a {
      max-width: 150px;
      font-weight: bold;
      border-radius: 5px;
      padding: 20px 25px;
    }
  
    a.button {
      color: #ffffff;
      background-color: #302f2f;

    }
  
    a.button:hover {
      color: #302f2f;
      background-color: #edbebe;
    }
  }

`;

export const HallBoxOne = styled.div`
`;

export const HallBoxTwo = styled.div`
`;

export const HallImage = styled.div`
  width: 800px;
  

  
`;

export const HallInfo = styled.div`
  width: 100%;
`;

export const HallSum = styled.div`
`;

export const HallBtn = styled.div`
`;

export const ButtonBox = styled.div`
  margin-left: 0px;
  margin-top: 30px;
`;

export default HallWrapper;