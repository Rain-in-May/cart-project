  
import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import moment from 'moment';
import LikeDislike from 'components/UI/CommentCard/LikeDislike';
import Rating from 'components/UI/Rating/Rating';
import { RatingMeta, PopoverWrapper } from 'container/review/Review.style'
import 'moment/locale/ko'

const CommendCard = (props) => {
  const content = props.singleReview.reviewContent;
  const commentDate = props.singleReview.regDate;
  const postTime = new Date(commentDate).getTime();
  const score = props.singleReview.score;
  const username = props.singleReview.username;
  
  return (
    <div className="comment-area">
      <div className="comment-wrapper">
        <div className="comment-header">
            <div className="author-info">
              <h4 className="author-name">{username.replace(/.{3}$/, "***")}</h4>
              {score && (
                <div className="author-rating">
                  <RatingMeta>
                    <Rating revRating={score} ratingCount={score} type='bulk'/>
                  </RatingMeta>
                  </div>
              )}

            </div>
          <div className="rating-area">
            <LikeDislike />
            <div className="comment-date">
              <PopoverWrapper>
              <Popover
                placement="bottom"
                content={moment(commentDate).lang('ko').format(
                  'yyyy-MM-DD (ddd)'
                )}
              >
                <span>{moment(postTime).fromNow()}</span>
              </Popover></PopoverWrapper>
            </div>
          </div>
        </div>
        <div className="comment-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default CommendCard;