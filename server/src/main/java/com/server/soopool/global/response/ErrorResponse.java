package com.server.soopool.global.response;

import com.server.soopool.global.exception.ExceptionCode;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
public class ErrorResponse {
    private static List<Map> fieldErrors = new ArrayList<>();

    ErrorResponse(List<Map> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }
    public static ErrorResponse of(ExceptionCode exceptionCode){
        Map<String, String> group = new HashMap<>();
        group.put("status", String.valueOf(exceptionCode.getStauts()));
        group.put("reason", exceptionCode.getMessage());

        fieldErrors.add(group);

        return new ErrorResponse(fieldErrors);
    }
}
