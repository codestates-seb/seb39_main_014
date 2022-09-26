package com.server.soopool.global.baseTime;


import com.server.soopool.auth.exception.AppAuthenticationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler
    public ResponseEntity AppAuthenticationExceptionHandler(AppAuthenticationException e){
        return new ResponseEntity(e.getExceptionCode(), HttpStatus.valueOf(e.getMessage()));
    }
}
