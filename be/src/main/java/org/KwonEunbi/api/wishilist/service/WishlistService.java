package org.KwonEunbi.api.wishilist.service;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.domain.ExhbnHallDTO;
import org.KwonEunbi.api.wishilist.domain.WishDTO;
import org.KwonEunbi.api.wishilist.domain.Wishlist;
import org.KwonEunbi.api.wishilist.domain.WishlistDTO;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface WishlistService {
    public long delete(long userNum, long exhbnNum);
    public List<Wishlist> findAll();
    public Wishlist getOne(long id);
    public long add(WishlistDTO w);
    public List<WishDTO> findWishlist();
    public List<Exhbn> findByUser(long id);
}
