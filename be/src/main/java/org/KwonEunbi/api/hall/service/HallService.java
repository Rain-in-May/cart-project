package org.KwonEunbi.api.hall.service;

import java.util.List;
import java.util.Optional;

import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.hall.domain.HallDTO;

public interface HallService {
	public long save(Hall hall);
	public long delete(long id);
	public long count();
	public Hall getOne(long id);
	public Optional<Hall> findById(long id);
	public boolean existsById(long id);
	public List<Hall> findAll();
	public long update(String hallName, String hallLocation, String hallTime, String hallClosed,
					   String hallPnumber, String hallInfo, String Image, long hallNum);
	public List<HallDTO> findAllHall();
}
