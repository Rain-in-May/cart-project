package org.KwonEunbi.api.booking.domain;

import lombok.NoArgsConstructor;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.user.domain.UserVO;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

import java.util.Date;

@Component @Data @Lazy
public class BookingDTO {
	private long bookNum;
	private long exhbnNum;
	private long userNum;
	private Date bookDate;
	private String totalPrice;
	private String bookName;
	private String bookEmail;
	private String bookPnumber;
	private String bookTickets;
	private Exhbn exhbn;
	private UserVO user;

	public Booking toEntity(){
		return Booking.builder()
				.bookNum(this.bookNum)
				.bookName(this.bookName)
				.bookEmail(this.bookEmail)
				.bookPnumber(this.bookPnumber)
				.bookTickets(this.bookTickets)
				.bookDate(this.bookDate)
				.totalPrice(this.totalPrice)
				.exhbn(this.exhbn)
				.user(this.user)
				.build();
	}
}
