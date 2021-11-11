package org.KwonEunbi.api.user.repository;

import org.KwonEunbi.api.user.domain.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

interface UserCustomRepository {
    public String findId(long id);
    public UserVO checkId(String username);
    public UserVO checkEmail(String email);
}
@Repository
public interface UserRepository extends JpaRepository<UserVO, Long>, UserCustomRepository {
    boolean existsByUsername(String username);
    UserVO findByUsername(String username);
    @Transactional
    void deleteByUsername(String username);
    @Query(value="select review from exhbns e", nativeQuery = true)
    public List<Long> getReview();
}