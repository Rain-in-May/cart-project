package org.KwonEunbi.api.user.domain;
import lombok.Getter;

import java.util.Arrays;

import org.springframework.security.core.GrantedAuthority;

@Getter
public enum Role implements GrantedAuthority{
    ADMIN("ROLE_ADMIN", "관리자권한"), USER("ROLE_USER", "사용자권한"), UNKNOWN("UNKNOWN", "알수없는 권한");

    private String code;
    private String description;

    Role(String code, String description) {
        this.code = code;
        this.description = description;
    }

    public static Role of(String code) {
        return Arrays.stream(Role.values()).filter(r -> r.getCode().equals(code)).findAny().orElse(UNKNOWN);
    }

    public String getAuthority() {
        return name();
    }

}