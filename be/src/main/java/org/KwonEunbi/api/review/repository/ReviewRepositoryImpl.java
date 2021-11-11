package org.KwonEunbi.api.review.repository;

import java.util.List;

import javax.persistence.EntityManager;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.KwonEunbi.api.review.domain.ReviewExhbnDTO;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import org.KwonEunbi.api.review.domain.Review;
import org.KwonEunbi.api.review.domain.ReviewDTO;
import static org.KwonEunbi.api.review.domain.QReview.review;

@Repository
public class ReviewRepositoryImpl extends QuerydslRepositorySupport implements ReviewCustomRepository{
	private final JPAQueryFactory qf;
	private final EntityManager em;
	public ReviewRepositoryImpl(JPAQueryFactory qf, EntityManager em) {
		super(Review.class);
		this.qf = qf;
		this.em = em;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<ReviewDTO> findByUserNum(long userNum) {
		return em.createQuery("select "
				+ "r.review_num reviewNum  "
				+ "r.review_title reviewTitle "
				+ "r.review_content reviewContent "
				+ "r.reg_date regDate "
				+ "r.score score"
				+ "u.user_num userNum "
				+ "u.username username "
				+ "u.email email \n"
				+ "from Review r inner join User u on r.user_num = u.user_num \n"
				+ "where r.user_num like :userNum")
				.setParameter("userNum", userNum)
				.getResultList();
	}
	@Override
	public List<ReviewExhbnDTO> findReview(){
		return qf.select(Projections.bean(ReviewExhbnDTO.class,
				review.reviewNum, review.reviewTitle, review.reviewContent, review.regDate,
				review.score, review.user.userNum, review.exhbn.exhbnNum,
				review.exhbn.exhbnTitle, review.user.username))
				.from(review).orderBy(review.regDate.desc()).fetch();
	}
	@Override
	public ReviewExhbnDTO findUsername(long id){
		return qf.select(Projections.bean(ReviewExhbnDTO.class,
				review.reviewNum, review.reviewTitle, review.reviewContent, review.regDate,
				review.score, review.user.userNum, review.exhbn.exhbnNum,
				review.exhbn.exhbnTitle, review.user.username))
				.from(review).where(review.reviewNum.eq(id)).fetchOne();
	}
	@Override
	public List<ReviewExhbnDTO> findByExhbn(long id){
		return qf.select(Projections.bean(ReviewExhbnDTO.class,
				review.reviewNum, review.reviewTitle, review.reviewContent, review.regDate,
				review.score, review.user.userNum, review.exhbn.exhbnNum,
				review.exhbn.exhbnTitle, review.user.username))
				.from(review).where(review.exhbn.exhbnNum.eq(id))
				.orderBy(review.regDate.desc()).fetch();
	}
	@Override
	public List<ReviewExhbnDTO> findByUser(long id){
		return qf.select(Projections.bean(ReviewExhbnDTO.class,
				review.reviewNum, review.reviewTitle, review.reviewContent, review.regDate,
				review.score, review.user.userNum, review.exhbn.exhbnNum,
				review.exhbn.exhbnTitle, review.user.username))
				.from(review).where(review.user.userNum.eq(id))
				.orderBy(review.regDate.desc()).fetch();
	}
	@Override
	public ReviewExhbnDTO findByReveiwNum(long id){
		return qf.select(Projections.bean(ReviewExhbnDTO.class,
				review.reviewNum, review.reviewTitle, review.reviewContent, review.regDate,
				review.score, review.user.userNum, review.exhbn.exhbnNum,
				review.exhbn.exhbnTitle, review.user.username))
				.from(review).where(review.reviewNum.eq(id))
				.fetchOne();
	}
}