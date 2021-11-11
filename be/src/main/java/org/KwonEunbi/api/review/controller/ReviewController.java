package org.KwonEunbi.api.review.controller;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.booking.domain.BookingExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.service.ExhbnServiceImpl;
import org.KwonEunbi.api.review.domain.ReviewDTO;
import org.KwonEunbi.api.review.domain.ReviewExhbnDTO;
import org.KwonEunbi.api.user.service.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.KwonEunbi.api.review.domain.Review;
import org.KwonEunbi.api.review.service.ReviewServiceImpl;
import org.KwonEunbi.api.common.controller.AbstractController;

@RestController @CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/reviews") @RequiredArgsConstructor 
public class ReviewController{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	final ReviewServiceImpl service;
	final UserServiceImpl userService;
	final ExhbnServiceImpl exhbnService;
	
	@PostMapping("")
	public ResponseEntity<Long> save(@RequestBody ReviewDTO r) {
		r.setUser(userService.getOne(r.getUserNum()));
		r.setExhbn(exhbnService.getOne(r.getExhbnNum()));
		ResponseEntity.ok(service.add(r));
		Exhbn e = exhbnService.getOne(r.getExhbn().getExhbnNum());
		e.setTotalScore(exhbnService.totalScore(r.getExhbn().getExhbnNum()));
		return null;
	}
	@DeleteMapping("")
	public ResponseEntity<Long> delete(@RequestBody Review t) {
		return ResponseEntity.ok(service.delete(t));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable long id){
		return ResponseEntity.ok(service.deleteById(id));
	}
	@PutMapping("/{id}")
	public ResponseEntity<String> update(@PathVariable long id, @RequestBody Review review){
		Review r = service.getOne(id);
		if(!(review.getReviewContent().equals(r.getReviewContent()) ||
				review.getReviewContent().equals(""))) {
			r.setReviewContent(review.getReviewContent());
		}
		if(!(review.getScore()==r.getScore() ||
				review.getScore()==0)) {
			r.setScore(review.getScore());
		}
		ResponseEntity.ok(service.update(r));
		Exhbn e = exhbnService.getOne(r.getExhbn().getExhbnNum());
		e.setTotalScore(exhbnService.totalScore(r.getExhbn().getExhbnNum()));
		return null;
	}
	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}
	@GetMapping("")
	public ResponseEntity<List<ReviewExhbnDTO>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	@GetMapping("/{id}")
	public ResponseEntity<ReviewExhbnDTO> getOne(@PathVariable long id) {
		return ResponseEntity.ok(service.findUsername(id));
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Review>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}
	@GetMapping("/exhbn/{id}")
	public ResponseEntity<List<ReviewExhbnDTO>> findByExhbn(@PathVariable long id) {
		return ResponseEntity.ok(service.findByExhbn(id));
	}
	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		return ResponseEntity.ok(service.existsById(id));
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<List<ReviewExhbnDTO>> findByUser(@PathVariable long id){
		return ResponseEntity.ok(service.findByUser(id));
	}
	@GetMapping("/review/{id}")
	public ResponseEntity<ReviewExhbnDTO> findByReveiwNum(@PathVariable long id){
		return ResponseEntity.ok(service.findByReveiwNum(id));
	}
}