package com.server.soopool.auth.exception;

import lombok.Getter;

@Getter
public enum AppAuthExceptionCode {

    ACCESS_TOKEN_EXPIRED("Access token expired"),
    INVALID_ACCESS_TOKEN("Invalid access token"),
    ACCESS_TOKEN_NOT_EXIST("Access token not exist"),
    REFRESH_TOKEN_EXPIRED("Refresh token expired"),
    INVALID_REFRESH_TOKEN("Refresh token is empty"),
    REFRESH_TOKEN_NOT_EXIST("Refresh token not exist"),
    INVALID_EMAIL_OR_PASSWORD("Invalid email or password"),
    DATA_DESERIALIZE_ERROR("Failed to login request body deserialization"),
    EXISTS_MEMBER("Member already exists"),
    OAUTH2_AUTH_FAILURE("OAuth2 Authentication failure"),
    INVALID_OAUTH2_PROVIDER("Invalid OAuth2 provider"),
    UNDEFINED("Undefined");

    private final String message;

    AppAuthExceptionCode(String message){
        this.message = message;
    }

}
