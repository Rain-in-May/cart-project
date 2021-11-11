package org.KwonEunbi.api.recommend.repository;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import org.KwonEunbi.api.recommend.domain.Recommend;

@Repository
public class RecommendRepositoryImpl extends QuerydslRepositorySupport implements RecommendCustomRepository{
	//private final JPAQueryFactory qf;
	public RecommendRepositoryImpl() {
		super(Recommend.class);
		//this.qf = qf;
	}
}
