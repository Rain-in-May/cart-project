package org.KwonEunbi.api.hall.controller;

import java.util.List;
import java.util.Optional;

import org.KwonEunbi.api.hall.domain.Hall;
import org.KwonEunbi.api.hall.domain.HallDTO;
import org.KwonEunbi.api.common.service.FilesStorageService;
import org.KwonEunbi.api.hall.service.HallServiceImpl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/halls")
public class HallController{
	final HallServiceImpl service;
	final FilesStorageService storageService;;

	@PostMapping("")
	public ResponseEntity<Long> save(@RequestBody Hall h) {
		return ResponseEntity.ok(service.save(h));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Long> delete(@PathVariable long id) {
		return ResponseEntity.ok(service.delete(id));
	}

	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}

	@GetMapping("/one/{id}")
	public ResponseEntity<Hall> getOne(@PathVariable long id) {
		return ResponseEntity.ok(service.getOne(id));
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Hall>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}

	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		return ResponseEntity.ok(service.existsById(id));
	}

	@GetMapping("/all")
	public ResponseEntity<List<Hall>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping("")
	public ResponseEntity<List<HallDTO>> findAllHall() {
		return ResponseEntity.ok(service.findAllHall());
	}

	@PutMapping("/{id}")
	public ResponseEntity<Long> update(@RequestBody Hall t, @PathVariable long id) {
		Hall h = service.getOne(id);
		if(!(t.getHallName().equals(h.getHallName()) || t.getHallName().equals(""))) {
			h.setHallName(t.getHallName());
		}
		if(!(t.getHallLocation().equals(h.getHallLocation()) || t.getHallLocation().equals(""))) {
			h.setHallLocation(t.getHallLocation());
		}
		if(!(t.getHallTime().equals(h.getHallTime()) || t.getHallTime().equals(""))) {
			h.setHallTime(t.getHallTime());
		}
		if(!(t.getHallClosed().equals(h.getHallClosed()) || t.getHallClosed().equals(""))) {
			h.setHallClosed(t.getHallClosed());
		}
		if(!(t.getHallPnumber().equals(h.getHallPnumber()) || t.getHallPnumber().equals(""))) {
			h.setHallPnumber(t.getHallPnumber());
		}
		if(!(t.getHallInfo().equals(h.getHallInfo()) || t.getHallInfo().equals(""))) {
			h.setHallInfo(t.getHallInfo());
		}
		if(!(t.getHallImage().equals(h.getHallImage()) || t.getHallImage().equals(""))) {
			h.setHallImage(t.getHallImage());
		}
		return ResponseEntity.ok(service.save(h));
	}

}
