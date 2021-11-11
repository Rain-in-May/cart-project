package org.KwonEunbi.api.booking.service;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.booking.domain.BookingDTO;
import org.KwonEunbi.api.booking.domain.BookingExhbnDTO;
import org.springframework.stereotype.Service;

import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.booking.repository.BookingRepository;
import org.KwonEunbi.api.common.service.AbstractService;

@Service @RequiredArgsConstructor
public class BookingServiceImpl implements BookingService{
	private final BookingRepository repo;
	
	@Override public long save(Booking b) { return (repo.save(b) != null) ?  1 : 0;}
	@Override public long add(BookingDTO b) { return (repo.save(b.toEntity()) != null) ?  1 : 0;}
	@Override public long delete(Booking b) { repo.delete(b); return (getOne(b.getBookNum()) == null) ? 1 : 0;}
	public String deleteId(long id) {
		repo.deleteById(id);
		return (id == 0L) ? "SUCCESS" : "FAIL";
	}
	@Override public long count() { return (long)repo.count();}
	@Override public List<BookingExhbnDTO> findAll() { return repo.findBooking();}
	@Override public Booking getOne(long id) { return repo.getOne(id);}
	@Override public BookingExhbnDTO findByBookNum(long id) { return repo.findByBookNum(id);}
	@Override public Optional<Booking> findById(long id){ return repo.findById(id);}
	@Override public boolean existsById(long id) { return repo.existsById(id);}
	@Override public long update(String bookName, String bookEmail, String bookPnumber, long bookNum) { 
		return repo.update(bookName, bookEmail, bookPnumber, bookNum);}
	@Override public List<BookingExhbnDTO> findByUser(long id){
		return repo.findByUser(id);
	}
}
