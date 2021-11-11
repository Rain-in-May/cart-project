import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SummaryWrapper, { PosterImage, Info, ButtonGroup, PosterBox, InfoBox, ButtonBox } from 'container/common/SinglePage/Summary/Summary.style';
import { Heading, Rating, Favorite, FaceBookShare, TwitterShare, InstagramShare } from 'components/index';
import { RatingMeta } from 'container/common/SinglePage/Summary/Summary.style';
import { Button, Menu, Dropdown } from 'antd';
import Moment from 'moment';
import 'moment/locale/ko'
import axios from 'axios';

const SocialShareMenu = ( props) => {

    return (
      <Menu>
        <Menu.Item>
          <TwitterShare {...props} />
        </Menu.Item>
        <Menu.Item>
          <FaceBookShare {...props} />
        </Menu.Item>
        <Menu.Item>
          <InstagramShare {...props} />
        </Menu.Item>
      </Menu>
    );
  };

const Summary = (props) => {
    
const {  
  title,
  rating,
  ratingCount,
  titleStyle,
  media,
  location,
  start, end, genre, price, artist}
= props;
const [ isWishAdd, setIsWishAdd ] = useState(false)
const wishHandler = e => {
  if(localStorage.getItem("cartuser") == null){
    alert('로그인 후 찜하기가 가능합니다.')
  }else {
  }
}
return (
        <SummaryWrapper>
          <PosterBox>
            <PosterImage>
                <img src={media} alt="" />
            </PosterImage>    
            <ButtonGroup>
              <Favorite className="ant-btn" content="찜하기" onClick = {wishHandler}/>
              <Dropdown
                placement="bottomRight"
                overlay={() => <SocialShareMenu {...props} />}
                overlayClassName="social_share_menu"
              >
                <Button className="ant-dropdown-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.309 15.537">
                    <path
                      d="M80.68,101.873,74.507,96.1a.316.316,0,0,0-.245-.105c-.193.009-.438.144-.438.35v2.9a.187.187,0,0,1-.158.179c-6.138.941-8.724,5.535-9.639,10.3-.035.188.219.363.337.214a11.158,11.158,0,0,1,9.275-4.7.216.216,0,0,1,.184.21v2.844a.375.375,0,0,0,.634.232l6.217-5.876a.483.483,0,0,0,.153-.368A.586.586,0,0,0,80.68,101.873Z"
                      transform="translate(-63.271 -95.242)"
                    />
                  </svg>
                  공유하기
                </Button>
              </Dropdown>
            </ButtonGroup>
          </PosterBox>
          <InfoBox>
            <Info>
                <Heading as="h2" content={title} {...titleStyle} />
                <RatingMeta>
                    <Rating rating={rating} ratingCount={ratingCount}/>
                </RatingMeta>
                <ul>
                    <li><strong>장소</strong> <span>{location}</span></li>
                    <li><strong>기간</strong> <span>
                    {Moment(start).lang("ko").format('YYYY-MM-DD (ddd)')} 
                    ~ {Moment(end).lang("ko").format('YYYY-MM-DD (ddd)')}
                      </span></li>
                    <li><strong>가격</strong> <span>
                      {price === '무료' || price === '' ? '무료' :
                       price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원'}
                    </span></li>
                    <li><strong>장르</strong> <span>{genre}</span></li>
                    <li><strong>작가</strong> <span>{artist}</span></li>
                </ul>
            </Info>
          </InfoBox>
        </SummaryWrapper>
    );
};



Summary.propTypes = {
    titleStyle: PropTypes.object,
  };
  
  Summary.defaultProps = {
    titleStyle: {
        color: '#2C2C2C',
        fontSize: ['17px', '20px', '25px'],
        lineHeight: ['1.15', '1.2', '1.36'],
        mb: '4px',
    },
};

export default Summary;