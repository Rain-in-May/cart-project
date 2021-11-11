package org.KwonEunbi.api.recommend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.KwonEunbi.api.analysis.domain.Analysis;

import lombok.Getter;

@Entity @Getter @Table(name = "recommends") @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Recommend {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rec_num") private long recNum;

	@JsonBackReference(value = "analysis")
	@ManyToOne
	@JoinColumn(name = "anal_num")
	private Analysis analysis;

	public void setRecNum(long recNum) {
		this.recNum = recNum;
	}

	public void setAnalysis(Analysis analysis) {
		this.analysis = analysis;
	}

	@Override
	public String toString() {
		return "Recommend{" +
				"recNum=" + recNum +
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