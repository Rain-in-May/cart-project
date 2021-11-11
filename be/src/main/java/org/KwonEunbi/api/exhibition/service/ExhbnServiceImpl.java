package org.KwonEunbi.api.exhibition.service;

import com.querydsl.core.Tuple;
import org.KwonEunbi.api.common.service.AbstractService;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.exhibition.repository.ExhbnRepository;

import lombok.RequiredArgsConstructor;

import java.util.*;
import java.util.stream.Collectors;

import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.review.domain.Review;
import org.KwonEunbi.api.review.service.ReviewServiceImpl;
import org.KwonEunbi.api.user.domain.UserVO;
import org.KwonEunbi.api.user.service.UserServiceImpl;
import org.springframework.stereotype.Service;

@Service @RequiredArgsConstructor
public class ExhbnServiceImpl implements ExhbnService {
	private final ExhbnRepository repo;
	private final UserServiceImpl userService;
	private final ReviewServiceImpl revService;

	@Override public long save(Exhbn e) { return (repo.save(e) != null) ? 1 : 0;}
	@Override public long add(ExhbnDTO e) { return (repo.save(e.toEntity()) != null) ? 1 : 0;}
	@Override public long delete(long id) { repo.deleteById(id); return(getOne(id) == null) ? 1 : 0;}
	@Override public long count() { return repo.count();}
	@Override public Exhbn getOne(long id) { return repo.getOne(id);}
	@Override public Optional<Exhbn> findById(long id) { return repo.findById(id);}
	@Override public boolean existsById(long id) { return repo.existsById(id);}
	@Override public List<Exhbn> findAll() {
		return repo.findAll().stream().sorted(Comparator.comparing(Exhbn::getExhbnNum)
				.reversed()).collect(Collectors.toList());}
    @Override public long update(String exhbnTitle, String startDate, String endDate, String exhbnGenre, String exhbnPrice,
    		String exhbnArtist, String exhbnContent, String exhbnImage, String hallLocation, long exhbnNum) { 
		return repo.update(exhbnTitle, startDate, endDate, exhbnGenre, exhbnPrice, 
								exhbnArtist, exhbnContent, exhbnImage, hallLocation, exhbnNum);}
    @Override
	public List<ExhbnHallDTO> searchTitle(String exhbnTitle){
		return repo.searchTitle(exhbnTitle).stream().collect(Collectors.toList());}
	@Override
	public List<ExhbnHallDTO> topList(){
		return repo.findByScore().stream().limit(10).collect(Collectors.toList());
	}
	@Override
	public List<ExhbnHallDTO> nowInExhbn(){
		return repo.nowInExhbn();
	}
	@Override
	public List<ExhbnHallDTO> finExhbn(){ return repo.finExhbn();}
	@Override
	public List<ExhbnHallDTO> findByHall(long id){
		return repo.findByHall(id);
	}
	@Override
	public float totalScore(long l){
		Exhbn exhbn = getOne(l);
		List<Review> revList = exhbn.getReviewList();
		int sum = 0;
		for(int i = 0; i < revList.size(); i++){
			sum = sum + revList.get(i).getScore();
		}
		float avg = (float)sum / revList.size();
		return Float.parseFloat(String.format("%.1f", avg));
	}
	@Override
	public List<ExhbnHallDTO> findAllInfo(){
		return repo.findAllInfo();
	}
	@Override
	public ExhbnHallDTO findByExhbnNum(long id){
		return repo.findByExhbnNum(id);
	}
	public List<ExhbnHallDTO> findOne(long id){
		return repo.findOne(id);
	}
}