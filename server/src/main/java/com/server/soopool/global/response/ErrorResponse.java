package com.server.soopool.global.response;

import com.server.soopool.auth.exception.AppAuthExceptionCode;
import com.server.soopool.global.exception.ExceptionCode;
import lombok.Getter;

@Getter
public class ErrorResponse {

    private final int status;
    private final String message;

    public ErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static ErrorResponse of(AppAuthExceptionCode exceptionCode){
        return new ErrorResponse(exceptionCode.getStatus(),exceptionCode.getMessage());
    }

    public static ErrorResponse of(ExceptionCode exceptionCode){
        return new ErrorResponse(exceptionCode.getStatus(),exceptionCode.getMessage());
    }

}
