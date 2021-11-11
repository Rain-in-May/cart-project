import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import TextLink from 'components/UI/TextLink/TextLink';
import Rating from 'components/UI/Rating/Rating';
import Favourite from 'components/UI/Favorite/Favorite';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GridCard from 'components/GridCard/GridCard';
import Moment from 'moment';
import 'moment/locale/ko'
import axios from 'axios';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const PostGrid = ({exhbnNum, exhbnTitle, exhbnImage, hallName, startDate, endDate, totalScore}) => {
  const [ isWishAdd, setIsWishAdd ] = useState(false)
  const [ usernum, setUsernum ] = useState(0)
  const URL = 'http://localhost:8080/wishlist'

  return (
    <GridCard
      isCarousel={true}
     /*  favorite={ <Favourite
        onClick={ wishHandler }
        exhbnNum = {exhbnNum}/> } */
      title={<TextLink link={`exhbns/${exhbnNum}`} content={exhbnTitle}/>}
      location={`${hallName}`}
      date={`${Moment(startDate).lang("ko").format('YYYY-MM-DD (ddd)')} 
              ~ ${Moment(endDate).lang("ko").format('YYYY-MM-DD (ddd)')}`}
      rating={<Rating rating={totalScore} ratingCount={totalScore} type="bulk" />}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
      >
          <img
            src={exhbnImage}
            alt={exhbnTitle}
            key={exhbnNum}
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'relative',
            }}
          />
      </Carousel>
    </GridCard>
  );
};

export default PostGrid;
