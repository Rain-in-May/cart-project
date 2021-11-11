package org.KwonEunbi.api.wishilist.domain;

import lombok.Data;
import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.user.domain.UserVO;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component @Data @Lazy
public class WishlistDTO {
	private long wishNum;
	private long exhbnNum;
	private long userNum;
	private Exhbn exhbn;
	private UserVO user;

	public Wishlist toEntity(){
		return Wishlist.builder()
				.wishNum(this.wishNum)
				.user(this.user)
				.exhbn(this.exhbn)
				.build();
	}
}
/*
create table shows(
   show_num int primary key auto_increment,
   title varchar(30),
   period varchar(30),
   time varchar(20),
   venue varchar(20),
   admission varchar(20),
   price varchar(100),
   host varchar(20),
   management varchar(20),
   inquiry varchar(20)
   );
   poster_image varchar(100)*/