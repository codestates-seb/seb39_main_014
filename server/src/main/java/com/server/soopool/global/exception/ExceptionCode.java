package com.server.soopool.global.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum ExceptionCode {


    //MEMBER EXCEPTION

    MEMBER_NOT_FOUND(404,"회원을 찾을 수 없습니다."),


    //COMMENT EXCEPTION

    COMMENT_NOT_DELETE(500, "댓글 삭제에 실패했습니다."),
    COMMENT_NOT_MODIFY(500, "댓글 수정에 실패했습니다."),
    CAN_NOT_MODIFY_COMMENT(401,"댓글을 수정할 권한이 없습니다."),
    CAN_NOT_RECRUIT(400, "해당 커리어에 지원할 수 없습니다."),
    CAN_NOT_DELETE_COMMENT(401,"댓글을 삭제할 권한이 없습니다."),

    //BOARD EXCEPTION

    BOARD_NOT_FOUND(404,"게시글을 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(404,"댓글을 찾을 수 없습니다."),
    CAREER_NOT_FOUND(404, "커리어를 찾을 수 없습니다."),
    TECHSTACK_NOT_FOUND(404, "사용기술을 찾을 수 없습니다."),
    CAN_NOT_MODIFY_BOARD(401,"게시글을 수정할 권한이 없습니다."),
    CAN_NOT_DELETE_BOARD(401,"게시글을 삭제할 권한이 없습니다."),
    ALREADY_RECRUIT(400, "이미 지원한 게시글입니다."),
    NEEDED_LOGIN(401,"로그인이 필요한 서비스 입니다.");


    @Getter
    private int status;
    @Getter
    private String message;

}
