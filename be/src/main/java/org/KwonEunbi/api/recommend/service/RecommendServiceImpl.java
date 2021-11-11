package org.KwonEunbi.api.recommend.service;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.exhibition.repository.ExhbnRepository;
import org.KwonEunbi.api.exhibition.service.ExhbnServiceImpl;
import org.KwonEunbi.api.user.domain.UserVO;
import org.KwonEunbi.api.user.service.UserServiceImpl;
import org.springframework.stereotype.Service;

import org.KwonEunbi.api.recommend.domain.Recommend;
import org.KwonEunbi.api.recommend.repository.RecommendRepository;
import org.KwonEunbi.api.common.service.AbstractService;

@Service @RequiredArgsConstructor
public class RecommendServiceImpl extends AbstractService<Recommend> implements RecommendService{
	private final RecommendRepository repo;
	final UserServiceImpl userService;
	final ExhbnRepository exhbnRepo;

	@Override public long save(Recommend r) { return (repo.save(r) != null) ? 1 : 0;}
	@Override public long delete(Recommend r) { repo.delete(r); return (getOne(r.getRecNum()) == null) ? 1 : 0;}
	@Override public long count() { return (long)repo.count();}
	@Override public List<Recommend> findAll() { return repo.findAll();}
	@Override public Recommend getOne(long id) { return repo.getOne(id);}
	@Override public Optional<Recommend> findById(long id){ return repo.findById(id);}
	@Override public boolean existsById(long id) { return repo.existsById(id);}
	@Override
	public List<ExhbnHallDTO> listByGenre(long userNum){
		UserVO user = userService.getOne(userNum);
		List<ExhbnHallDTO> exhbn = exhbnRepo.findByGenre(user.getPreferGenre());
		return exhbn;
	}
	@Override
	public List<ExhbnHallDTO> listByMedia(){
		return exhbnRepo.findByMedia();
	}
}
