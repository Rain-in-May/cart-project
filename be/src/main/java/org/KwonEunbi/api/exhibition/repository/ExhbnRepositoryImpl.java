package org.KwonEunbi.api.exhibition.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;

import static org.KwonEunbi.api.exhibition.domain.QExhbn.exhbn;
import static org.KwonEunbi.api.hall.domain.QHall.hall;


import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.exhibition.domain.ExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.hall.domain.Hall;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class ExhbnRepositoryImpl extends QuerydslRepositorySupport implements ExhbnCustomRepository{
	private final JPAQueryFactory qf;
	private final EntityManager em;
	public ExhbnRepositoryImpl(EntityManager em, JPAQueryFactory qf) {
		super(Exhbn.class);
		this.em = em;
		this.qf = qf;
	}

	@Override
	public List<ExhbnHallDTO> searchTitle(String exhbnTitle) {
		//return em.createQuery("select exh from Exhbn exh where exh.exhbnTitle like CONCAT('%',:title,'%')")
		//		.setParameter("title", exhbnTitle).getResultList();
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn).where(exhbn.exhbnTitle.contains(exhbnTitle))
				.orderBy(exhbn.exhbnNum.desc())
				.fetch();
	}

	@Override
	public List<ExhbnHallDTO> nowInExhbn(){
		Date nowDate = new Date();
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.startDate.before(nowDate), exhbn.endDate.after(nowDate))
				.orderBy(exhbn.startDate.desc()).fetch();
	}

	@Override
	public List<ExhbnHallDTO> finExhbn(){
		Date nowDate = new Date();
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.endDate.before(nowDate))
				.orderBy(exhbn.endDate.asc())
				.fetch();
	}

	@Override
	public List<ExhbnHallDTO> findByHall(long id){
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn).where(hall.hallNum.eq(id))
				.orderBy(exhbn.exhbnNum.desc())
				.fetch();
	}

	@Override
	public List<ExhbnHallDTO> findByGenre(String genre) {
		Date nowDate = new Date();
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.exhbnGenre.eq(genre), exhbn.startDate.before(nowDate),
						exhbn.endDate.after(nowDate))
				.orderBy(exhbn.exhbnNum.desc())
				.fetch();
	}

	@Override
	public List<ExhbnHallDTO> findByScore() {
		Date nowDate = new Date();
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.totalScore.isNotNull())
				.orderBy(exhbn.totalScore.desc())
				.fetch();
	}

	@Override
	public List<ExhbnHallDTO> findAllInfo() {
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.orderBy(exhbn.exhbnNum.desc())
				.fetch();
	}

	@Override
	public ExhbnHallDTO findByExhbnNum(long id){
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.exhbnNum.eq(id))
				.fetchOne();
	}

	@Override
	public List<ExhbnHallDTO> findOne(long id){
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.exhbnNum.eq(id))
				.fetch();
	}

	@Override
	public List<ExhbnHallDTO> findByMedia() {
		Date nowDate = new Date();
		return qf.select(Projections.bean(ExhbnHallDTO.class,
				exhbn.exhbnNum, exhbn.hall.hallNum, exhbn.exhbnTitle, exhbn.startDate, exhbn.endDate,
				exhbn.exhbnGenre, exhbn.exhbnPrice, exhbn.exhbnArtist, exhbn.exhbnContent,
				exhbn.exhbnImage, exhbn.totalScore, exhbn.hall.hallName))
				.from(exhbn)
				.where(exhbn.exhbnGenre.eq("미디어"), exhbn.startDate.before(nowDate),
						exhbn.endDate.after(nowDate))
				.orderBy(exhbn.exhbnNum.desc())
				.fetch();
	}
}