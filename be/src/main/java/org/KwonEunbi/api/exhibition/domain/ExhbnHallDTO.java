package org.KwonEunbi.api.exhibition.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.KwonEunbi.api.hall.domain.Hall;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.Date;

@Data
@NoArgsConstructor
public class ExhbnHallDTO {
    private long exhbnNum;
    private long hallNum;
    private String exhbnTitle;
    private Date startDate;
    private Date endDate;
    private String exhbnGenre;
    private String exhbnPrice;
    private String exhbnArtist;
    private String exhbnContent;
    private String exhbnImage;
    private Float totalScore;
    private String hallName;

    public ExhbnHallDTO(long exhbnNum, long hallNum, String exhbnTitle, Date startDate, Date endDate,
                        String exhbnGenre, String exhbnPrice, String exhbnArtist, String exhbnContent,
                        String exhbnImage, Float totalScore, String hallName){
        this.exhbnNum = exhbnNum;
        this.hallNum = hallNum;
        this.exhbnTitle = exhbnTitle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.exhbnGenre = exhbnGenre;
        this.exhbnPrice = exhbnPrice;
        this.exhbnArtist = exhbnArtist;
        this.exhbnContent = exhbnContent;
        this.exhbnImage = exhbnImage;
        this.totalScore = totalScore;
        this.hallName = hallName;
    }

}
