package org.KwonEunbi.api.security.exception;
import lombok.Getter;

@Getter
public enum ErrorCode {
    AUTHENTICATION_FAILED(401, "AUTH_001", "AUTHENTICATION_FAILED."), Login_FAILED(401, "AUTH_002", "Login_FAILED."),
    ACCESS_DENIED(401, "AUTH_003", "ACCESS_DENIED."),
    TOKEN_GENERATION_FAILED(500, "AUTH_004", "TOKEN_GENERATION_FAILED.");

    private final String code;
    private final String message;
    private int status;

    ErrorCode(final int status, final String code, final String message) {
        this.status = status;
        this.message = message;
        this.code = code;
    }
}