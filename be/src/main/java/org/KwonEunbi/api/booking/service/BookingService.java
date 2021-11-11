package org.KwonEunbi.api.booking.service;

import java.util.List;
import java.util.Optional;

import org.KwonEunbi.api.booking.domain.Booking;
import org.KwonEunbi.api.booking.domain.BookingDTO;
import org.KwonEunbi.api.booking.domain.BookingExhbnDTO;

public interface BookingService {
	public long save(Booking b);
	public long delete(Booking b);
	public List<BookingExhbnDTO> findAll();
	public long count();
	public Booking getOne(long id);
	public Optional<Booking> findById(long id);
	public boolean existsById(long id);
	public long add(BookingDTO b);
	public long update(String bookName, String bookEmail, String bookPnumber, long bookNum);
	public BookingExhbnDTO findByBookNum(long id);
	public List<BookingExhbnDTO> findByUser(long id);
}
