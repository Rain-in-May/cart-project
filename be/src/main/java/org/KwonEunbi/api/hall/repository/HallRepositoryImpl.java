package org.KwonEunbi.api.hall.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import org.KwonEunbi.api.hall.domain.Hall;

@Repository
public class HallRepositoryImpl extends QuerydslRepositorySupport implements HallCustomRepository {

	//private final JPAQueryFactory qf;
	private final EntityManager em;
	public HallRepositoryImpl(EntityManager em) {
		super(Hall.class);
		//this.qf = qf;
		this.em = em;
	}
}
