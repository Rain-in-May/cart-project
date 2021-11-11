package org.KwonEunbi.api.exhibition.repository;

import com.querydsl.core.Tuple;
import org.KwonEunbi.api.exhibition.domain.Exhbn;

import java.util.List;

import org.KwonEunbi.api.exhibition.domain.ExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

interface ExhbnCustomRepository{
	public List<ExhbnHallDTO> searchTitle(String exhbnTitle);
	public List<ExhbnHallDTO> nowInExhbn();
	public List<ExhbnHallDTO> finExhbn();
	public List<ExhbnHallDTO> findByHall(long id);
	public List<ExhbnHallDTO> findByGenre(String genre);
	public List<ExhbnHallDTO> findByMedia();
	public List<ExhbnHallDTO> findByScore();
	public List<ExhbnHallDTO> findAllInfo();
	public ExhbnHallDTO findByExhbnNum(long id);
	public List<ExhbnHallDTO> findOne(long id);
}
public interface ExhbnRepository extends JpaRepository<Exhbn, Long>, ExhbnCustomRepository {
	@Query(value="update exhbns e set e.exhbn_title = :exhbnTitle, e.start_date = :startDate, "
			+ "e.end_date =:endDate, e.exhbn_genre =:exhbnGenre, e.exhbn_price =:exhbnPrice, "
			+ "e.exhbn_artist =:exhbnArtist, e.exhbn_content =:exhbnContent, e.exhbn_image =:exhbnImage, "
			+ "e.hall_location =:hallLocation "
			+ " where e.exhbn_num = :exhbnNum;", nativeQuery = true)
	public long update(@Param("exhbnTitle") String exhbnTitle,
						@Param("startDate") String startDate, 
						@Param("endDate") String endDate,
						@Param("exhbnGenre") String exhbnGenre,
						@Param("exhbnPrice") String exhbnPrice,
						@Param("exhbnArtist") String exhbnArtist,
						@Param("exhbnContent") String exhbnContent,
						@Param("exhbnImage") String exhbnImage,
						@Param("hallLocation") String hallLocation,
						@Param("exhbnNum") long exhbnNum);
}
