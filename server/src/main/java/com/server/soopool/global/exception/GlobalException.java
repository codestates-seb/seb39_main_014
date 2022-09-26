package com.server.soopool.global.exception;

import com.server.soopool.global.response.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler
    public ResponseEntity BusinessLogicExceptionHandler(BusinessLogicException e){
        return new ResponseEntity<>(
                ErrorResponse.of(e.getExceptionCode()),
                HttpStatus.valueOf(e.getExceptionCode().getStauts())
        );
    }
}
