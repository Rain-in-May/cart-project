package org.KwonEunbi.api.wishilist.service;


import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.booking.domain.BookingDTO;
import org.KwonEunbi.api.common.service.AbstractService;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.exhibition.service.ExhbnServiceImpl;
import org.KwonEunbi.api.user.domain.UserVO;
import org.KwonEunbi.api.user.service.UserServiceImpl;
import org.KwonEunbi.api.wishilist.domain.WishDTO;
import org.KwonEunbi.api.wishilist.domain.Wishlist;
import org.KwonEunbi.api.wishilist.domain.WishlistDTO;
import org.KwonEunbi.api.wishilist.repository.WishlistRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service @RequiredArgsConstructor
public class WishlistServiceImpl implements WishlistService {
	private final WishlistRepository repo;
	final UserServiceImpl userService;
	final ExhbnServiceImpl exhbnService;

	@Override public long delete(long userNum, long exhbnNum) { repo.deleteWish(userNum, exhbnNum); return 1;}
	@Override public List<Wishlist> findAll() { return repo.findAll();}
	@Override public Wishlist getOne(long id) { return repo.getOne(id);}
	@Override public long add(WishlistDTO w) { return (repo.save(w.toEntity()) != null) ?  1 : 0;}
	@Override public List<WishDTO> findWishlist() { return repo.findWishlist();}
	@Override public List<Exhbn> findByUser(long id){
		return repo.findByUser(id);
	}
}