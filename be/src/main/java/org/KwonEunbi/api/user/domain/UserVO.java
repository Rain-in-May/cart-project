package org.KwonEunbi.api.user.domain;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.KwonEunbi.api.analysis.domain.Analysis;
import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.review.domain.Review;

import lombok.Data;
import lombok.Getter;
import org.KwonEunbi.api.wishilist.domain.Wishlist;


@Entity @Data @Table(name = "users") @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserVO {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_num") private long userNum;
	@Column private String username;
	@Column private String password;
	@Column private String name;
	@Column private String email;
	@Column private String gender;
	@Column private String birthday;
	@Column private String admin;
	@Column private String userImage;
	@Column(name = "phone_number") private String phoneNumber;
	@Column(name = "prefer_genre") private String preferGenre;

	@JsonManagedReference @JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Analysis> analysisList = new ArrayList<>();

	@JsonManagedReference @JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Booking> bookingList = new ArrayList<>();

	@JsonManagedReference @JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Review> reviewList = new ArrayList<>();

	@JsonManagedReference @JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Wishlist> wishLists = new ArrayList<>();

	@ElementCollection(fetch = FetchType.EAGER)
	List<Role> roles;

	public void setUserNum(long userNum) {
		this.userNum = userNum;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setPreferGenre(String preferGenre) {
		this.preferGenre = preferGenre;
	}

	public void setAnalysisList(List<Analysis> analysisList) {
		this.analysisList = analysisList;
	}

	public void setBookingList(List<Booking> bookingList) {
		this.bookingList = bookingList;
	}

	public void setReviewList(List<Review> reviewList) {
		this.reviewList = reviewList;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "UserVO{" +
				"userNum=" + userNum +
				", username='" + username + '\'' +
				", password='" + password + '\'' +
				", name='" + name + '\'' +
				", email='" + email + '\'' +
				", gender='" + gender + '\'' +
				", birthday='" + birthday + '\'' +
				", phoneNumber='" + phoneNumber + '\'' +
				", preferGenre='" + preferGenre + '\'' +
				'}';
	}
}
