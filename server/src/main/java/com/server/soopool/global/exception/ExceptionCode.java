package com.server.soopool.global.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum ExceptionCode {


    //COMMON EXCEPTION

    MEMBER_NOT_FOUND(404,"회원을 찾을 수 없습니다."),


    //COMMENT EXCEPTION

    COMMENT_NOT_DELETE(500, "댓글 삭제에 실패했습니다."),
    COMMENT_NOT_MODIFY(500, "댓글 수정에 실패했습니다."),
    BOARD_NOT_FOUNT(404, "해당 게시글을 찾을 수 없습니다."),

    //BOARD EXCEPTION

    BOARD_NOT_FOUND(404,"게시글을 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(404,"댓글을 찾을 수 없습니다."),

    CAREER_NOT_FOUND(404, "커리어를 찾을 수 없습니다."),
    TECHSTACK_NOT_FOUND(404, "사용기술을 찾을 수 없습니다.");


    @Getter
    private int status;
    @Getter
    private String message;

}
