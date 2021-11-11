package org.KwonEunbi.api.exhibition.controller;

import java.io.File;
import java.util.*;

import com.querydsl.core.Tuple;
import org.KwonEunbi.api.common.controller.AbstractController;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.exhibition.service.ExhbnServiceImpl;
import org.KwonEunbi.api.hall.domain.Hall;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.hall.domain.HallDTO;
import org.KwonEunbi.api.hall.service.HallServiceImpl;
import org.KwonEunbi.api.review.domain.Review;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

@RestController 
@RequiredArgsConstructor 
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/exhbns")
public class ExhbnController{
	final ExhbnServiceImpl service;
	final HallServiceImpl hallService;
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("")
	public ResponseEntity<Long> save(@RequestBody Exhbn e) {
		System.out.println(e.toString());
		return ResponseEntity.ok(service.save(e));
	}

	@PostMapping("/add")
	public ResponseEntity<Long> add(@RequestBody ExhbnDTO e) {
		System.out.println(e.toString());
		e.setHall(hallService.getOne(e.getHallNum()));
		if(e.getExhbnGenre().equals("painting")){
			e.setExhbnGenre("회화");
		}else if(e.getExhbnGenre().equals("craft")){
			e.setExhbnGenre("공예");
		}else if(e.getExhbnGenre().equals("media")){
			e.setExhbnGenre("미디어");
		}else if(e.getExhbnGenre().equals("sculpture")){
			e.setExhbnGenre("조각");
		}else if(e.getExhbnGenre().equals("installation")){
			e.setExhbnGenre("설치");
		}
		return ResponseEntity.ok(service.add(e));
	}
	
	@PutMapping("/{exhbnNum}")
	public ResponseEntity<Long> update(@RequestBody Exhbn t, @PathVariable long exhbnNum) {
		logger.info("수정 정보: "+t.toString());
		Exhbn e = service.getOne(exhbnNum);
		if(!(t.getExhbnTitle().equals(e.getExhbnTitle()) || t.getExhbnTitle().equals(""))) {
			e.setExhbnTitle(t.getExhbnTitle());
		}
		if(!(t.getStartDate().equals(e.getStartDate()) || t.getStartDate().equals(new Date()))) {
			e.setStartDate(t.getStartDate());
		}
		if(!(t.getEndDate().equals(e.getEndDate()) || t.getEndDate().equals(new Date()))) {
			e.setEndDate(t.getEndDate());
		}
		if(!(t.getExhbnGenre().equals(e.getExhbnGenre()) || t.getExhbnGenre().equals(""))) {
			e.setExhbnGenre(t.getExhbnGenre());
		}
		if(!(t.getExhbnPrice().equals(e.getExhbnPrice()) || t.getExhbnPrice().equals(""))) {
			e.setExhbnPrice(t.getExhbnPrice());
		}
		if(!(t.getExhbnArtist().equals(e.getExhbnArtist()) || t.getExhbnArtist().equals(""))) {
			e.setExhbnArtist(t.getExhbnArtist());
		}
		if(!(t.getExhbnContent().equals(e.getExhbnContent()) || t.getExhbnContent().equals(""))) {
			e.setExhbnContent(t.getExhbnContent());
		}
		if(!(t.getExhbnImage().equals(e.getExhbnImage()) || t.getExhbnImage().equals(""))) {
			e.setExhbnImage(t.getExhbnImage());
		}
		if(!(t.getTotalScore().equals(e.getTotalScore()) || t.getTotalScore()==0)) {
			e.setTotalScore(t.getTotalScore());
		}

		return ResponseEntity.ok(service.save(e));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Long> delete(@PathVariable long id) {
		return ResponseEntity.ok(service.delete(id));
	}

	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}

	@GetMapping("/{id}")
	public ResponseEntity<ExhbnHallDTO> findByExhbnNum(@PathVariable long id) {
		return ResponseEntity.ok(service.findByExhbnNum(id));
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<List<ExhbnHallDTO>> findOne(@PathVariable long id) {
		return ResponseEntity.ok(service.findOne(id));
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Exhbn>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}

	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		return ResponseEntity.ok(service.existsById(id));
	}

	@GetMapping("")
	public ResponseEntity<List<Exhbn>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping("/search/{exhbnTitle}")
	public ResponseEntity<List<ExhbnHallDTO>> searchTitle(@PathVariable String exhbnTitle){
		return ResponseEntity.ok(service.searchTitle(exhbnTitle));
	}

	@GetMapping("/topList")
	public ResponseEntity<List<ExhbnHallDTO>> topList(){
		return ResponseEntity.ok(service.topList());
	}

	@GetMapping("/now")
	public ResponseEntity<List<ExhbnHallDTO>> nowInExhbn(){
		return ResponseEntity.ok(service.nowInExhbn());
	}

	@GetMapping("/fin")
	public ResponseEntity<List<ExhbnHallDTO>> finExhbn(){
		return ResponseEntity.ok(service.finExhbn());
	}

	@GetMapping("/hall/{id}")
	public ResponseEntity<List<ExhbnHallDTO>> findByHall(@PathVariable  long id) {
		return ResponseEntity.ok(service.findByHall(id));
	}

	@GetMapping("/allInfo")
	public ResponseEntity<List<ExhbnHallDTO>> findAllInfo() {
		return ResponseEntity.ok(service.findAllInfo());
	}

	@GetMapping("/totalscore")
	public void totalScore() {
		List<Exhbn> e = service.findAll();
		for (int i = 0; i < e.size(); i++) {
			if(e.get(i).getReviewList().size() != 0) {
				e.get(i).setTotalScore(service.totalScore(e.get(i).getExhbnNum()));
				service.save(e.get(i));
			}
		}
	}
}