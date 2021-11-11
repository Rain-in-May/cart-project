package org.KwonEunbi.api.analysis.repository;

import org.KwonEunbi.api.analysis.domain.Analysis;
import org.springframework.data.jpa.repository.JpaRepository;

interface AnalysisCustomRepository{
	
}

public interface AnalysisRepository extends JpaRepository<Analysis, Long>, AnalysisCustomRepository {

}
