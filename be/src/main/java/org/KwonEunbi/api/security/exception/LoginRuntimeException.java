package org.KwonEunbi.api.security.exception;

public class LoginRuntimeException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public LoginRuntimeException(){
        super(ErrorCode.Login_FAILED.getMessage());
    }

    @SuppressWarnings("unused")
    private LoginRuntimeException(String msg){
        super(msg);
    }
}