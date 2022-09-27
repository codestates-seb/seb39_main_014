package com.server.soopool.auth.exception;

import lombok.Getter;
import org.springframework.security.core.AuthenticationException;

@Getter
public class AppAuthenticationException extends AuthenticationException {

    private final AppAuthExceptionCode exceptionCode;

    public AppAuthenticationException(AppAuthExceptionCode exceptionCode){
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }

    public AppAuthenticationException(AppAuthExceptionCode exceptionCode, String message){
        super(message);
        this.exceptionCode = exceptionCode;
    }
}
