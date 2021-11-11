package org.KwonEunbi.api.security.exception;
import org.springframework.http.HttpStatus;

import lombok.Getter;
@Getter
public class SecurityRuntimeException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    private final String message;
    private final HttpStatus httpStatus;

    public SecurityRuntimeException(String message, HttpStatus httpStatus) {
        this.message = message;
        this.httpStatus = httpStatus;
    }
}