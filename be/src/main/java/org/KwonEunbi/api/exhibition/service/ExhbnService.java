package org.KwonEunbi.api.exhibition.service;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;

import java.util.List;
import java.util.Optional;

public interface ExhbnService {
	public long save(Exhbn e);
	public long delete(long id);
	public long count();
	public Exhbn getOne(long id);
	public long update(String exhbnTitle, String startDate, String endDate, String exhbnGenre, String exhbnPrice,
					   String exhbnArtist, String exhbnContent, String exhbnImage, String hallLocation, long exhbnNum);
	public long add(ExhbnDTO e);
	public Optional<Exhbn> findById(long id);
	public boolean existsById(long id);
	public List<Exhbn> findAll();
	public List<ExhbnHallDTO> searchTitle(String exhbnTitle);
	public List<ExhbnHallDTO> nowInExhbn();
	public List<ExhbnHallDTO> finExhbn();
	public List<ExhbnHallDTO> findByHall(long id);
	public List<ExhbnHallDTO> topList();
	public List<ExhbnHallDTO> findAllInfo();
	public ExhbnHallDTO findByExhbnNum(long id);
	public List<ExhbnHallDTO> findOne(long id);
	public float totalScore(long l);
}
