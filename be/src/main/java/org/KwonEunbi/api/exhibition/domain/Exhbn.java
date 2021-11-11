package org.KwonEunbi.api.exhibition.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.KwonEunbi.api.analysis.domain.Analysis;
import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.review.domain.Review;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import org.KwonEunbi.api.user.domain.UserVO;
import org.KwonEunbi.api.wishilist.domain.Wishlist;

@Entity
@Getter
@Table(name = "exhbns")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) @NoArgsConstructor
public class Exhbn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exhbn_num")
    private long exhbnNum;
    @Column(name = "exhbn_title")
    private String exhbnTitle;
    @Column(name = "start_date")
    private Date startDate;
    @Column(name = "end_date")
    private Date endDate;
    @Column(name = "exhbn_genre")
    private String exhbnGenre;
    @Column(name = "exhbn_price")
    private String exhbnPrice;
    @Column(name = "exhbn_artist")
    private String exhbnArtist;
    @Column(name = "exhbn_content")
    private String exhbnContent;
    @Column(name = "exhbn_image")
    private String exhbnImage;
    @Column(name = "total_score")
    private Float totalScore;

    @JsonBackReference(value = "hall")
    @ManyToOne
    @JoinColumn(name = "hall_num")
    private Hall hall;

    @JsonManagedReference @JsonIgnore
    @OneToMany(mappedBy = "exhbn",cascade = CascadeType.REMOVE)
    private List<Analysis> analysisList = new ArrayList<>();

    @JsonManagedReference @JsonIgnore
    @OneToMany(mappedBy = "exhbn",cascade = CascadeType.REMOVE)
    private List<Booking> bookingList = new ArrayList<>();

    @JsonManagedReference @JsonIgnore
    @OneToMany(mappedBy = "exhbn",cascade = CascadeType.REMOVE)
    private List<Review> reviewList = new ArrayList<>();

    @JsonManagedReference @JsonIgnore
    @OneToMany(mappedBy = "exhbn", cascade = CascadeType.REMOVE)
    private List<Wishlist> wishLists = new ArrayList<>();

    @Builder
    public Exhbn(long exhbnNum, String exhbnTitle, Date startDate, Date endDate,
                   String exhbnGenre, String exhbnPrice, String exhbnArtist,
                   String exhbnContent, String exhbnImage, Float totalScore, Hall hall) {
        this.exhbnNum = exhbnNum;
        this.exhbnTitle = exhbnTitle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.exhbnGenre = exhbnGenre;
        this.exhbnPrice = exhbnPrice;
        this.exhbnArtist = exhbnArtist;
        this.exhbnContent = exhbnContent;
        this.exhbnImage = exhbnImage;
        this.totalScore = totalScore;
        this.hall = hall;
    }

    public void setExhbnNum(long exhbnNum) {
        this.exhbnNum = exhbnNum;
    }

    public void setExhbnTitle(String exhbnTitle) {
        this.exhbnTitle = exhbnTitle;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setExhbnGenre(String exhbnGenre) {
        this.exhbnGenre = exhbnGenre;
    }

    public void setExhbnPrice(String exhbnPrice) {
        this.exhbnPrice = exhbnPrice;
    }

    public void setExhbnArtist(String exhbnArtist) {
        this.exhbnArtist = exhbnArtist;
    }

    public void setExhbnContent(String exhbnContent) {
        this.exhbnContent = exhbnContent;
    }

    public void setExhbnImage(String exhbnImage) {
        this.exhbnImage = exhbnImage;
    }

    public void setTotalScore(Float totalScore) { this.totalScore = totalScore; }

    public void setHall(Hall hall) {
        this.hall = hall;
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

    @Override
    public String toString() {
        return "Exhbn{" +
                "exhbnNum=" + exhbnNum +
                ", exhbnTitle='" + exhbnTitle + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", exhbnGenre='" + exhbnGenre + '\'' +
                ", exhbnPrice='" + exhbnPrice + '\'' +
                ", exhbnArtist='" + exhbnArtist + '\'' +
                ", exhbnContent='" + exhbnContent + '\'' +
                ", exhbnImage='" + exhbnImage + '\'' +
                '}';
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