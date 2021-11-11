package org.KwonEunbi.api.hall.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.KwonEunbi.api.exhibition.domain.Exhbn;

import lombok.Getter;

@Entity @Getter
@Table(name = "halls") @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Hall {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hall_num") private long hallNum;
    @Column(name = "hall_name") private String hallName;
    @Column(name = "hall_location") private String hallLocation;
    @Column(name = "hall_time") private String hallTime;
    @Column(name = "hall_closed") private String hallClosed;
    @Column(name = "hall_pnumber") private String hallPnumber;
    @Column(name = "hall_info") private String hallInfo;
    @Column(name = "hall_image") private String hallImage;

    @JsonManagedReference @JsonIgnore
    @OneToMany(mappedBy = "hall", cascade = CascadeType.ALL)
    private List<Exhbn> exhbnList = new ArrayList<>();

    public void setHallNum(long hallNum) {
        this.hallNum = hallNum;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    public void setHallLocation(String hallLocation) {
        this.hallLocation = hallLocation;
    }

    public void setHallTime(String hallTime) {
        this.hallTime = hallTime;
    }

    public void setHallClosed(String hallClosed) {
        this.hallClosed = hallClosed;
    }

    public void setHallPnumber(String hallPnumber) {
        this.hallPnumber = hallPnumber;
    }

    public void setHallInfo(String hallInfo) {
        this.hallInfo = hallInfo;
    }

    public void setHallImage(String hallImage) {
        this.hallImage = hallImage;
    }

    public void setExhbnList(List<Exhbn> exhbnList) {
        this.exhbnList = exhbnList;
    }

    @Override
    public String toString() {
        return "Hall{" +
                "hallNum=" + hallNum +
                ", hallName='" + hallName + '\'' +
                ", hallLocation='" + hallLocation + '\'' +
                ", hallTime='" + hallTime + '\'' +
                ", hallClosed='" + hallClosed + '\'' +
                ", hallPnumber='" + hallPnumber + '\'' +
                ", hallInfo='" + hallInfo + '\'' +
                ", hallImage='" + hallImage + '\'' +
                '}';
    }
}
/*
create table halls(
   hall_num int primary key auto_increment,
   hall_name varchar(50),
   hall_location varchar(100),
   hall_time varchar(20),
   hall_closed varchar(20),
   hall_pnumber varchar(20),
   hall_info varchar(200),
   hall_image varchar(100)
   );
*/