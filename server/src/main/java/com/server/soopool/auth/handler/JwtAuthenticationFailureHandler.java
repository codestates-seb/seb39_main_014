package com.server.soopool.auth.handler;

import com.server.soopool.auth.exception.AppAuthExceptionCode;
import com.server.soopool.auth.exception.AppAuthenticationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Slf4j
@Component
public class JwtAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        if(exception instanceof BadCredentialsException)
            throw new AppAuthenticationException(AppAuthExceptionCode.INVALID_EMAIL_OR_PASSWORD);

        if(exception instanceof AppAuthenticationException)
            throw exception;

        if(exception.getCause() instanceof AppAuthenticationException){
            throw (AppAuthenticationException) exception.getCause();
        }

        log.info("authentication undefined exception", exception);
        throw new AppAuthenticationException(AppAuthExceptionCode.UNDEFINED);
    }
}
