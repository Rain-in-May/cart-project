import React from 'react';
import PropTypes from 'prop-types';
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from 'react-icons/io';

const Rating = props => {
  const { rating, ratingCount, revRating, type, ratingFieldName } = props;
  let i, floorValue;
  let ratingView = [];
  if (rating && rating !== 0) {
    floorValue = Math.floor(rating);
    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(<IoIosStar key={i} />);
      } else if(rating-i >= 0.5) {
        ratingView.push(<IoIosStarHalf key={i} />);
      } else {
        ratingView.push(<IoIosStarOutline key={i} />);
      }
    }
  }else if(rating && rating == 0){
    ratingView.push(<IoIosStarOutline key={1}/>);
    ratingView.push(<IoIosStarOutline key={2}/>);
    ratingView.push(<IoIosStarOutline key={3}/>);
    ratingView.push(<IoIosStarOutline key={4}/>);
    ratingView.push(<IoIosStarOutline key={5}/>);
  }
  if (revRating && revRating !== 0) {
    floorValue = Math.floor(revRating);
    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(<IoIosStar key={i} />);
      } else {
        ratingView.push(<IoIosStarOutline key={i} />);
      }
    }
  }

  return (
    <>
      {type && type === 'bulk' ? (
        <>
          <span>{ratingView}</span>
          <strong>
             {ratingCount}
          </strong>
        </>
      ) : (
        <>
          <p>{ratingView}</p>
          <strong>
             {ratingCount}
          </strong>
        </>
      )}
    </>
  );
};

Rating.propTypes = {
  type: PropTypes.string.isRequired,
  ratingCount: PropTypes.number,
  rating: PropTypes.number,
  ratingFieldName: PropTypes.string,
};

export default Rating;
