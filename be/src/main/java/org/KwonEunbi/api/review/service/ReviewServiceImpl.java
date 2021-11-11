package org.KwonEunbi.api.review.service;

import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.booking.domain.BookingDTO;
import org.KwonEunbi.api.booking.domain.BookingExhbnDTO;
import org.KwonEunbi.api.review.domain.ReviewDTO;
import org.KwonEunbi.api.review.domain.ReviewExhbnDTO;
import org.springframework.stereotype.Service;

import org.KwonEunbi.api.review.domain.Review;
import org.KwonEunbi.api.review.repository.ReviewRepository;
import org.KwonEunbi.api.common.service.AbstractService;

@Service @RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{
	private final ReviewRepository repo;
	
	@Override public long save(Review r) { return (repo.save(r) != null) ? 1 : 0;}
	@Override public long delete(Review r) { repo.delete(r); return (getOne(r.getReviewNum()) == null) ? 1 : 0;}
	@Override
	public String update(Review review) {
		Review rev = repo.save(review);
		return (rev != null) ? "SUCCESS" : "FAILURE";
	}
	@Override public long add(ReviewDTO r) { return (repo.save(r.toEntity()) != null) ?  1 : 0;}
	@Override
	public String deleteById(long id) {
		repo.deleteById(id);
		return (id == 0L) ? "SUCCESS" : "FAILURE";
	}
	@Override public long count() { return (long)repo.count();}
	@Override public List<ReviewExhbnDTO> findAll() { return repo.findReview();}
	@Override public Review getOne(long id) { return repo.getOne(id);}
	@Override public ReviewExhbnDTO findUsername(long id) { return repo.findUsername(id);}
	@Override public List<ReviewExhbnDTO> findByExhbn(long id) { return repo.findByExhbn(id);}
	@Override public Optional<Review> findById(long id){ return repo.findById(id);}
	@Override public boolean existsById(long id) { return repo.existsById(id);}
	@Override public List<ReviewExhbnDTO> findByUser(long id){
		return repo.findByUser(id);
	}
	@Override public ReviewExhbnDTO findByReveiwNum(long id){
		return repo.findByReveiwNum(id);
	}
}
