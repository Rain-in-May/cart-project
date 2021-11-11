package org.KwonEunbi.api.analysis.controller;

import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.exhibition.repository.ExhbnRepository;
import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.review.domain.ReviewExhbnDTO;
import org.KwonEunbi.api.review.repository.ReviewRepository;
import org.KwonEunbi.api.user.domain.UserVO;
import org.KwonEunbi.api.user.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.KwonEunbi.api.analysis.domain.Analysis;
import org.KwonEunbi.api.analysis.service.AnalysisServiceImpl;
import org.KwonEunbi.api.common.controller.AbstractController;

@RestController @RequiredArgsConstructor @CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/analyses")
public class AnalysisController extends AbstractController<Analysis>{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	final AnalysisServiceImpl service;
	final UserRepository userRepo;
	final ExhbnRepository exhRepo;
	final ReviewRepository revRepo;

	@PostMapping("")
	public ResponseEntity<Long> save(@RequestBody Analysis t) {
		return ResponseEntity.ok(service.save(t));
	}
	@DeleteMapping("")
	public ResponseEntity<Long> delete(@RequestBody Analysis t) {
		return ResponseEntity.ok(service.delete(t));
	}
	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}
	@GetMapping("")
	public ResponseEntity<List<Analysis>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	@GetMapping("/one/{id}")
	public ResponseEntity<Analysis> getOne(@PathVariable long id) {
		return ResponseEntity.ok(service.getOne(id));
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Analysis>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}
	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		return ResponseEntity.ok(service.existsById(id));
	}

	@GetMapping("/gender")
		public Map<?, ?> analGender(){
			Map<String, Integer> map = new HashMap<>();
		List<UserVO> user = userRepo.findAll();
		int femaleCount = 0;
		int maleCount = 0;
		for(int i = 0; i < user.size(); i++ ) {
			if(user.get(i).getGender().equals("F")){
				femaleCount = femaleCount + 1;
			}else if(user.get(i).getGender().equals("M")){
				maleCount = maleCount + 1;
			}
		}
		map.put("female", femaleCount);
		map.put("male", maleCount);
		return map;
	}
	@GetMapping("/preferGenre")
	public Map<?, ?> analGenre(){
		Map<String, Integer> map = new HashMap<>();
		List<UserVO> user = userRepo.findAll();
		int mediaCount = 0;
		int craftCount = 0;
		int sculptureCount = 0;
		int paintingCount = 0;
		int installCount = 0;
		for(int i = 0; i < user.size(); i++ ) {
			if(user.get(i).getPreferGenre().equals("미디어")){
				mediaCount = mediaCount + 1;
			}else if(user.get(i).getPreferGenre().equals("설치")){
				installCount = installCount + 1;
			}else if(user.get(i).getPreferGenre().equals("회화")){
				paintingCount = paintingCount + 1;
			}else if(user.get(i).getPreferGenre().equals("공예")){
				craftCount = craftCount + 1;
			}else if(user.get(i).getPreferGenre().equals("조각")){
				sculptureCount = sculptureCount + 1;
			}
		}
		map.put("media", mediaCount);
		map.put("craft", craftCount);
		map.put("installation", installCount);
		map.put("painting", paintingCount);
		map.put("sculpture", sculptureCount);
		return map;
	}
	@GetMapping("/exhbnGenre")
	public Map<?, ?> analExhbnGenre(){
		Map<String, Integer> map = new HashMap<>();
		List<Exhbn> exhbn = exhRepo.findAll();
		int mediaCount = 0;
		int craftCount = 0;
		int sculptureCount = 0;
		int paintingCount = 0;
		int installCount = 0;
		for(int i = 0; i < exhbn.size(); i++ ) {
			if(exhbn.get(i).getExhbnGenre().equals("미디어")){
				mediaCount = mediaCount + 1;
			}else if(exhbn.get(i).getExhbnGenre().equals("설치")){
				installCount = installCount + 1;
			}else if(exhbn.get(i).getExhbnGenre().equals("회화")){
				paintingCount = paintingCount + 1;
			}else if(exhbn.get(i).getExhbnGenre().equals("공예")){
				craftCount = craftCount + 1;
			}else if(exhbn.get(i).getExhbnGenre().equals("조각")){
				sculptureCount = sculptureCount + 1;
			}
		}
		map.put("media", mediaCount);
		map.put("craft", craftCount);
		map.put("installation", installCount);
		map.put("painting", paintingCount);
		map.put("sculpture", sculptureCount);
		return map;
	}
	@GetMapping("/exhbnHall")
	public Map<?, ?> analExhbnHall(){
		Map<String, Integer> map = new HashMap<>();
		List<Exhbn> exhbn = exhRepo.findAll();
		int hall1Count = 0;
		int hall2Count = 0;
		int hall3Count = 0;
		int hall4Count = 0;
		int hall5Count = 0;
		int hall6Count = 0;
		int hall7Count = 0;
		for(int i = 0; i < exhbn.size(); i++ ) {
			if(exhbn.get(i).getHall().getHallName().equals("서소문본관")){
				hall1Count = hall1Count + 1;
			}else if(exhbn.get(i).getHall().getHallName().equals("북서울미술관")){
				hall2Count = hall2Count + 1;
			}else if(exhbn.get(i).getHall().getHallName().equals("남서울미술관")){
				hall3Count = hall3Count + 1;
			}else if(exhbn.get(i).getHall().getHallName().equals("난지미술창작스튜디오")){
				hall4Count = hall4Count + 1;
			}else if(exhbn.get(i).getHall().getHallName().equals("SeMA창고")){
				hall5Count = hall5Count + 1;
			}else if(exhbn.get(i).getHall().getHallName().equals("백남준기념관")){
				hall6Count = hall6Count + 1;
			}else if(exhbn.get(i).getHall().getHallName().equals("SeMA벙커")){
				hall7Count = hall7Count + 1;
			}
		}
		map.put("hall1", hall1Count);
		map.put("hall2", hall2Count);
		map.put("hall3", hall3Count);
		map.put("hall4", hall4Count);
		map.put("hall5", hall5Count);
		map.put("hall6", hall6Count);
		map.put("hall7", hall7Count);
		return map;
	}
	@GetMapping("/review/{id}")
	public Map<?, ?> analReview(@PathVariable long id){
		Map<String, Integer> map = new HashMap<>();
		List<ReviewExhbnDTO> review = revRepo.findByExhbn(id);
		int score5 = 0;
		int score4 = 0;
		int score3 = 0;
		int score2 = 0;
		int score1 = 0;
		for(int i = 0; i < review.size(); i++ ) {
			if(review.get(i).getScore() == 5L){
				score5 = score5 + 1;
			}else if(review.get(i).getScore() == 4L){
				score4 = score4 + 1;
			}else if(review.get(i).getScore() == 3L){
				score3 = score3 + 1;
			}else if(review.get(i).getScore() == 2L){
				score2 = score2 + 1;
			}else if(review.get(i).getScore() == 1L){
				score1 = score1 + 1;
			}
		}
		map.put("score1", score1);
		map.put("score2", score2);
		map.put("score3", score3);
		map.put("score4", score4);
		map.put("score5", score5);
		return map;
	}
}
