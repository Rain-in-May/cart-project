package org.KwonEunbi.api.wishilist.repository;

import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.wishilist.domain.WishDTO;
import org.KwonEunbi.api.wishilist.domain.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface WishlistCustomRepository{
    public List<WishDTO> findWishlist();
    public void deleteWish(long userNum, long exhbnNum);
    public List<WishDTO> findAlllist();
    public List<Exhbn> findByUser(long id);
}

public interface WishlistRepository extends JpaRepository<Wishlist, Long>, WishlistCustomRepository {

}
