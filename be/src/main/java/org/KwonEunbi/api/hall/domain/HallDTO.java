package org.KwonEunbi.api.hall.domain;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class HallDTO {
	private long hallNum;
    private String hallName;
    private String hallLocation;
    private String hallTime;
    private String hallClosed;
    private String hallPnumber;
    private String hallInfo;
    private String hallImage;

    public HallDTO(Hall h) {
        this.hallNum = h.getHallNum();
        this.hallName = h.getHallName();
        this.hallLocation = h.getHallLocation();
        this.hallTime = h.getHallTime();
        this.hallClosed = h.getHallClosed();
        this.hallPnumber = h.getHallPnumber();
        this.hallInfo = h.getHallInfo();
        this.hallImage = h.getHallImage();
    }
}
