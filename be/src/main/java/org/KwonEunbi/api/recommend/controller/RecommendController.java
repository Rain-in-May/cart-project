package org.KwonEunbi.api.recommend.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import org.KwonEunbi.api.recommend.domain.Recommend;
import org.KwonEunbi.api.recommend.service.RecommendServiceImpl;
import org.KwonEunbi.api.common.controller.AbstractController;

@RestController @RequiredArgsConstructor @CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/recommends")
public class RecommendController extends AbstractController<Recommend>{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	final RecommendServiceImpl service;
	
	@PostMapping("/save")
	public ResponseEntity<Long> save(@RequestBody Recommend t) {
		return ResponseEntity.ok(service.save(t));
	}

	@DeleteMapping("/delete")
	public ResponseEntity<Long> delete(@RequestBody Recommend t) {
		return ResponseEntity.ok(service.delete(t));
	}
	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}
	@GetMapping("/all")
	public ResponseEntity<List<Recommend>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	@GetMapping("/one/{id}")
	public ResponseEntity<Recommend> getOne(@PathVariable long id) {
		return ResponseEntity.ok(service.getOne(id));
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Recommend>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}
	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		return ResponseEntity.ok(service.existsById(id));
	}
	@GetMapping("/{id}")
	public ResponseEntity<List<ExhbnHallDTO>> listByGenre(@PathVariable long id) {
		return ResponseEntity.ok(service.listByGenre(id));
	}
	@GetMapping("/1")
	public ResponseEntity<List<ExhbnHallDTO>> listByMedia() {
		return ResponseEntity.ok(service.listByMedia());
	}
}
