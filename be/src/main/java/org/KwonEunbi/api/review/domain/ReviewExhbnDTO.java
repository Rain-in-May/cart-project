package org.KwonEunbi.api.review.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.user.domain.UserVO;

import java.util.Date;

@Data
@NoArgsConstructor
public class ReviewExhbnDTO {
    private long reviewNum;
    private long exhbnNum;
    private long userNum;
    private String reviewTitle;
    private String reviewContent;
    private Date regDate;
    private Integer score;
    private String exhbnTitle;
    private String username;

    public ReviewExhbnDTO(long reviewNum,long userNum, String reviewTitle, String reviewContent,
                          Date regDate, String exhbnTitle, Integer score, long exhbnNum, String username){
        this.reviewNum = reviewNum;
        this.exhbnTitle = exhbnTitle;
        this.exhbnNum = exhbnNum;
        this.username = username;
        this.userNum = userNum;
        this.reviewTitle = reviewTitle;
        this.reviewContent = reviewContent;
        this.regDate = regDate;
        this.score = score;
    }
}
