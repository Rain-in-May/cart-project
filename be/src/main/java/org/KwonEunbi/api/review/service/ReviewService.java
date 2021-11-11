package org.KwonEunbi.api.review.service;

import org.KwonEunbi.api.booking.domain.BookingDTO;
import org.KwonEunbi.api.review.domain.Review;
import org.KwonEunbi.api.review.domain.ReviewDTO;
import org.KwonEunbi.api.review.domain.ReviewExhbnDTO;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    public long save(Review r);
    public long delete(Review r);
    public String update(Review review);
    public String deleteById(long id);
    public long add(ReviewDTO r);
    public long count();
    public List<ReviewExhbnDTO> findAll();
    public Review getOne(long id);
    public Optional<Review> findById(long id);
    public boolean existsById(long id);
    public ReviewExhbnDTO findUsername(long id);
    public List<ReviewExhbnDTO> findByExhbn(long id);
    public List<ReviewExhbnDTO> findByUser(long id);
    public ReviewExhbnDTO findByReveiwNum(long id);
}
