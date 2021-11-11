package org.KwonEunbi.api.booking.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.KwonEunbi.api.exhibition.domain.Exhbn;

import java.util.Date;

@Data
@NoArgsConstructor
public class BookingExhbnDTO {
    private long bookNum;
    private long exhbnNum;
    private long userNum;
    private Date bookDate;
    private String totalPrice;
    private String bookName;
    private String bookEmail;
    private String bookPnumber;
    private String bookTickets;
    private String exhbnTitle;

    public BookingExhbnDTO(long bookNum, long userNum, String totalPrice, String exhbnTitle, long exhbnNum,
                           Date bookDate, String bookName, String bookEmail, String bookPnumber,String bookTickets){
        this.bookNum = bookNum;
        this.userNum = userNum;
        this.totalPrice = totalPrice;
        this.exhbnTitle = exhbnTitle;
        this.exhbnNum = exhbnNum;
        this.bookDate = bookDate;
        this.bookName = bookName;
        this.bookEmail = bookEmail;
        this.bookTickets = bookTickets;
        this.bookPnumber =bookPnumber;
    }
}