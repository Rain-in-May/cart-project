package org.KwonEunbi.api.booking.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.user.domain.UserVO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.KwonEunbi.api.user.domain.UserVO;
import org.h2.engine.User;

import java.util.Date;

@Entity @Getter @NoArgsConstructor
@Table(name = "bookings") @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Booking {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "book_num") private long bookNum;
	@Column(name = "book_date") private Date bookDate;
	@Column(name = "total_price") private String totalPrice;
	@Column(name = "book_name") private String bookName;
	@Column(name = "book_email") private String bookEmail;
	@Column(name = "book_pnumber") private String bookPnumber;
	@Column(name = "book_tickets") private String bookTickets;

	@JsonBackReference(value = "user")
	@ManyToOne
	@JoinColumn(name = "user_num")
	private UserVO user;

	@JsonBackReference(value = "exhbn")
	@ManyToOne
	@JoinColumn(name = "exhbn_num")
	private Exhbn exhbn;

	public void setBookNum(long bookNum) {
		this.bookNum = bookNum;
	}

	public void setBookDate(Date bookDate) {
		this.bookDate = bookDate;
	}

	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public void setBookEmail(String bookEmail) {
		this.bookEmail = bookEmail;
	}

	public void setBookPnumber(String bookPnumber) {
		this.bookPnumber = bookPnumber;
	}

	public void setBookTickets(String bookTickets) { this.bookTickets = bookTickets; }

	@Override
	public String toString() {
		return "Booking{" +
				"bookNum=" + bookNum +
				", bookDate=" + bookDate +
				", totalPrice='" + totalPrice + '\'' +
				", bookName='" + bookName + '\'' +
				", bookEmail='" + bookEmail + '\'' +
				", bookPnumber='" + bookPnumber + '\'' +
				'}';
	}

	@Builder
	public Booking(long bookNum, String bookName, String bookEmail, String bookPnumber,
				   String bookTickets, String totalPrice, Date bookDate, UserVO user, Exhbn exhbn) {
		this.bookNum = bookNum;
		this.bookName = bookName;
		this.bookEmail = bookEmail;
		this.bookPnumber = bookPnumber;
		this.bookTickets = bookTickets;
		this.bookDate = bookDate;
		this.totalPrice = totalPrice;
		this.user = user;
		this.exhbn = exhbn;
	}

}
