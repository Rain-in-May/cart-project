import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Heading, Text, Rating } from 'components/index';
import InformationWrapper, { Info, Img } from 'container/common/SinglePage/Information/Information.style';
import { RatingMeta } from 'container/exhibition/ExhibitionDetail.style';
import Moment from 'moment';
import 'moment/locale/ko'

const Information = ({
  title,
  location, 
  price,
  image,
  content,
  start, end,
  genre,
  artist,
  titleStyle,
  locationMetaStyle,
  contentStyle,
  rating, ratingCount
}) => {
  
  return (
    <Element name="overview" className="overview">
      <InformationWrapper>
      <Text content={'공지사항 및 예매안내 / 예매취소 안내 / 환불안내 / 티켓수령 안내 등의 자세한 안내사항을 확인해주세요.'} {...contentStyle} /><br/>
        <Img src={image}/>
        <Info>
          <h2>{title}</h2>
          <RatingMeta>
              <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
          </RatingMeta>
          <ul>
              <li><strong>가격</strong> <span>{price === '무료' || price === '' ? '무료' :
               price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원'}</span></li><br />
              <li><strong>장소</strong> <span>{location}</span></li><br />
              <li><strong>기간</strong> <span>
              {Moment({start}).lang("ko").format('YYYY-MM-DD (ddd)')} 
                ~ {Moment({end}).lang("ko").format('YYYY-MM-DD (ddd)')}
              </span></li><br />
          </ul>
          </Info>
      </InformationWrapper>
    </Element>
  );
};

Information.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Information.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: '23px',
    lineHeight: ['1.15', '1.2', '1.36'],
    padding: '40px 0px 5px',
  },
  locationMetaStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#909090',
    padding: '0px 0px 40px',
  },
  contentStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
  },
};

export default Information;