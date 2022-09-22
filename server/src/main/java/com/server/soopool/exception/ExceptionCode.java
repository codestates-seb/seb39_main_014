package com.server.soopool.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum ExceptionCode {
    BOARD_NOT_FOUND(404,"게시글을 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(404,"댓글을 찾을 수 없습니다."),
    MEMBER_NOT_FOUND(404,"멤버를 찾을 수 없습니다.");

    @Getter
    private int status;
    @Getter
    private String message;
}
