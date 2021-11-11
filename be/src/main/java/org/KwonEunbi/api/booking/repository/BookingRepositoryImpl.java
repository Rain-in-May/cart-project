package org.KwonEunbi.api.booking.repository;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.KwonEunbi.api.booking.domain.BookingExhbnDTO;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import org.KwonEunbi.api.booking.domain.Booking;

import static org.KwonEunbi.api.booking.domain.QBooking.booking;

@Repository
public class BookingRepositoryImpl extends QuerydslRepositorySupport implements BookingCustomRepository{
	private final JPAQueryFactory qf;
	private final EntityManager em;
	public BookingRepositoryImpl(JPAQueryFactory qf, EntityManager em) {
		super(Booking.class);
		this.qf = qf;
		this.em = em;
	}
	@Override
	public List<BookingExhbnDTO> findBooking() {
		return qf.select(Projections.bean(BookingExhbnDTO.class,
				booking.bookNum, booking.totalPrice, booking.bookDate, booking.bookName, booking.bookEmail,
				booking.bookPnumber, booking.bookTickets, booking.user.userNum,
				booking.exhbn.exhbnTitle, booking.exhbn.exhbnNum))
				.from(booking)
				.orderBy(booking.bookNum.desc())
				.fetch();
	}
	@Override
	public BookingExhbnDTO findByBookNum(long id) {
		return qf.select(Projections.bean(BookingExhbnDTO.class,
				booking.bookNum, booking.totalPrice, booking.bookDate, booking.bookName, booking.bookEmail,
				booking.bookPnumber, booking.bookTickets, booking.user.userNum,
				booking.exhbn.exhbnTitle, booking.exhbn.exhbnNum))
				.from(booking)
				.where(booking.bookNum.eq(id))
				.fetchOne();
	}
	@Override public List<BookingExhbnDTO> findByUser(long id) {
		return qf.select(Projections.bean(BookingExhbnDTO.class,
				booking.bookNum, booking.totalPrice, booking.bookDate, booking.bookName, booking.bookEmail,
				booking.bookPnumber, booking.bookTickets, booking.user.userNum,
				booking.exhbn.exhbnTitle, booking.exhbn.exhbnNum))
				.from(booking)
				.where(booking.user.userNum.eq(id))
				.orderBy(booking.bookDate.desc())
				.fetch();
	}
}
