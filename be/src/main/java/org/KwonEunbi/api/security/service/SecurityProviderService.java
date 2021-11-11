package org.KwonEunbi.api.security.service;
import java.util.Date;
import org.springframework.security.core.Authentication;
public interface SecurityProviderService<T> {
    T createAuthToken(String id, String role, Date expiredDate);
    T convertAuthToken(String token);
    Authentication getAuthentication(T authToken);
}