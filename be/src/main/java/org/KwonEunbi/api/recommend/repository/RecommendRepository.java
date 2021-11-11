package org.KwonEunbi.api.recommend.repository;

import org.KwonEunbi.api.recommend.domain.Recommend;
import org.springframework.data.jpa.repository.JpaRepository;

interface RecommendCustomRepository{
	
}
public interface RecommendRepository extends JpaRepository<Recommend, Long>, RecommendCustomRepository {

}
