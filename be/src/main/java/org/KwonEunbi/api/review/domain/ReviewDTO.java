package org.KwonEunbi.api.review.domain;

import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.user.domain.UserVO;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

import java.util.Date;

@Component @Data @Lazy
public class ReviewDTO {
	private long reviewNum;
	private long exhbnNum;
	private long userNum;
	private String reviewTitle;
	private String reviewContent;
	private Date regDate;
	private Integer score;
	private UserVO user;
	private Exhbn exhbn;

	public Review toEntity(){
		return Review.builder()
				.reviewNum(this.reviewNum)
				.reviewContent(this.reviewContent)
				.reviewTitle(this.reviewTitle)
				.score(this.score)
				.regDate(this.regDate)
				.exhbn(this.exhbn)
				.user(this.user)
				.build();
	}

}
/*
create table boards(
   board_num long primary key auto_increment,
   title varchar(30),
   content varchar(300),
   date varchar(20),
   id varchar(20)
   );*/