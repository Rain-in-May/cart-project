package org.KwonEunbi.api.booking.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import lombok.RequiredArgsConstructor;

import org.KwonEunbi.api.booking.domain.BookingDTO;
import org.KwonEunbi.api.booking.domain.BookingExhbnDTO;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.service.ExhbnServiceImpl;
import org.KwonEunbi.api.user.service.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
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

import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.booking.service.BookingServiceImpl;
import org.KwonEunbi.api.common.controller.AbstractController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController @RequiredArgsConstructor @CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/bookings")
public class BookingController{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	final BookingServiceImpl service;
	final UserServiceImpl userService;
	final ExhbnServiceImpl exhbnService;

	@PostMapping("")
	public ResponseEntity<Long> save(@RequestBody BookingDTO b) {
		b.setUser(userService.getOne(b.getUserNum()));
		b.setExhbn(exhbnService.getOne(b.getExhbnNum()));
		return ResponseEntity.ok(service.add(b));
	}

	@PutMapping("/{bookNum}")
	public ResponseEntity<Long> edit(@RequestBody Booking t, @PathVariable long bookNum){
		logger.info("수정 정보: "+t.toString());
		Booking b = service.getOne(bookNum);
		if(!(t.getBookName().equals(b.getBookName()) || t.getBookName().equals(""))) {
			b.setBookName(t.getBookName());
		}
		if(!(t.getBookEmail().equals(b.getBookEmail()) || t.getBookEmail().equals(""))) {
			b.setBookEmail(t.getBookEmail());
		}
		if(!(t.getBookPnumber().equals(b.getBookPnumber()) || t.getBookPnumber().equals(""))) {
			b.setBookPnumber(t.getBookPnumber());
		}
		return ResponseEntity.ok(service.save(b));
	}
	@DeleteMapping("")
	public ResponseEntity<Long> delete(@RequestBody Booking t) {
		return ResponseEntity.ok(service.delete(t));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteId(@PathVariable long id){
		return ResponseEntity.ok(service.deleteId(id));
	}

	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}
	@GetMapping("")
	public ResponseEntity<List<BookingExhbnDTO>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	@GetMapping("/{id}")
	public ResponseEntity<BookingExhbnDTO> getOne(@PathVariable long id) {
		return ResponseEntity.ok(service.findByBookNum(id));
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Booking>> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}
	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		return ResponseEntity.ok(service.existsById(id));
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<List<BookingExhbnDTO>> findByUser(@PathVariable long id){
		return ResponseEntity.ok(service.findByUser(id));
	}
}
