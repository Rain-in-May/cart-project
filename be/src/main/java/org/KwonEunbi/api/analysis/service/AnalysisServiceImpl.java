package org.KwonEunbi.api.analysis.service;


import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.exhibition.service.ExhbnServiceImpl;
import org.KwonEunbi.api.user.domain.UserVO;
import org.KwonEunbi.api.user.service.UserServiceImpl;
import org.springframework.stereotype.Service;

import org.KwonEunbi.api.analysis.domain.Analysis;
import org.KwonEunbi.api.analysis.repository.AnalysisRepository;
import org.KwonEunbi.api.common.service.AbstractService;


@Service @RequiredArgsConstructor
public class AnalysisServiceImpl extends AbstractService<Analysis> implements AnalysisService{
	private final AnalysisRepository repo;

	@Override public long save(Analysis h) { return (repo.save(h) != null) ? 1 : 0;}
	@Override public long delete(Analysis h) { repo.delete(h); return (getOne(h.getAnalNum()) == null) ? 1 : 0;}
	@Override public long count() { return (long)repo.count();}
	@Override public List<Analysis> findAll() { return repo.findAll();}
	@Override public Analysis getOne(long id) { return repo.getOne(id);}
	@Override public Optional<Analysis> findById(long id){ return repo.findById(id);}
	@Override public boolean existsById(long id) { return repo.existsById(id);}
}