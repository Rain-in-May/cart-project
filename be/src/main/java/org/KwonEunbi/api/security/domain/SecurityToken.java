package org.KwonEunbi.api.security.domain;

//import com.example.demo.core.security.AuthToken;
import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.SecurityException;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import io.jsonwebtoken.Jwts;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import javax.crypto.SecretKey;
import java.util.Calendar;
import java.util.Date;


@Slf4j 	@Getter
public class SecurityToken {
    private final String token;
    private final String key;
    private int tokenExpirationMsec = 7200000; // 만료시간 120분
    private static final String AUTHORITIES_KEY = "role";

    SecurityToken(String id, String role, Date expiredDate, String key) {
        this.key = key;
        this.token = createToken();
    }

    public String createToken() {
        try {
            //Header 부분 설정
            Map<String, Object> headers = new HashMap<>();
            headers.put("typ", "JWT");
            headers.put("alg", "HS256");

            //payload 부분 설정
            Map<String, Object> payloads = new HashMap<>();
            payloads.put("data", "My First JWT !!");

            Long expiredTime = 1000 * 60L * 60L * 2L; // 토큰 유효 시간 (2시간)

            Date ext = new Date(); // 토큰 만료 시간
            ext.setTime(ext.getTime() + expiredTime);
            return Jwts
                    .builder()
                    .setHeader(headers) // Headers 설정
                    .setClaims(payloads) // Claims 설정
                    .setSubject("user") // 토큰 용도
                    .setExpiration(ext) // 토큰 만료 시간 설정
                    .signWith(SignatureAlgorithm.HS256, key.getBytes()) // HS256과 Key로 Sign
                    .compact(); // 토큰 생성
            //	return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        } catch (SecurityException e) {
            log.info("Invalid JWT signature.");
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token.");
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT token.");
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT token.");
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of handler are invalid.");
        }
        return null;
    }
}