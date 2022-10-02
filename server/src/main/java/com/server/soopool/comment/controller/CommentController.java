package com.server.soopool.comment.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.comment.dto.*;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.comment.mapper.CommentMapper;
import com.server.soopool.comment.service.CommentService;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final BoardService boardService;
    private final CommentMapper commentMapper;
    private final MemberService memberService;

    @GetMapping("board/{board_id}/comment")
        public ResponseEntity getCommentsMatchingBoardId(@PathVariable("board_id") @Positive Long boardId) {
        // principal.getName()으로 로그인한 사용자의 아이디를 구합니다.
        Board board = boardService.findBoard(boardId);
        List<Comment> comments = commentService.getComments(board);

        return new ResponseEntity<>(
                new MultiResponseCommentDto<>(boardId, commentMapper.commentToCommentResponse(comments)),
                HttpStatus.OK
        );
    }

    // 댓글 생성
    @PostMapping("board/{board_id}/comment")
    @Secured("ROLE_USER")
    public ResponseEntity postComment(@AuthenticationPrincipal PrincipalDetails principal,
                                      @PathVariable("board_id") @Positive Long boardId,
                                      @Validated @RequestBody CommentPostDto commentPostDto){
        // PathVariable RequestParam 차이 알아보기 (RequestParam 오류 나는듯합니다.)
        // principal.getName()으로 로그인한 사용자의 아이디를 구합니다.
        Member member = memberService.findByUserId(principal.getUsername());
        Board board = boardService.findBoard(boardId);

        // 게시글 댓글 개수 + 1
        board.setCommentAmount(board.getCommentAmount() + 1);
        commentService.createComment(member.getId(), board.getId(), commentPostDto.getContent());
//        boardService.commentCount(board);
        List<Comment> comments = commentService.getComments(board);

        return new ResponseEntity<>(
                new MultiResponseCommentDto<>(boardId, commentMapper.commentToCommentResponse(comments)),
                HttpStatus.CREATED
        );
    }

    // 댓글 수정

    @PatchMapping("/board/{board_id}/comment")
    @Secured("ROLE_USER")
    public ResponseEntity patchComment(@AuthenticationPrincipal PrincipalDetails principal,
                                       @PathVariable("board_id") @Positive Long boardId,
                                       @Validated @RequestBody CommentPatchDto commentPatchDto) {
        // principal.getName()으로 로그인한 사용자의 아이디를 구합니다.

        Member member = memberService.findByUserId(principal.getUsername());
        Board board = boardService.findBoard(boardId);
        Comment comment = new Comment();
        for(Comment comment1 : board.getComments()) {
            if(comment1.getGroupNumber() == commentPatchDto.getGroupNumber()){
                comment = comment1;
            }
        }
        if (principal.getMemberId() != comment.getMember().getId()) {
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_MODIFY_COMMENT);
        }

        commentService.modifyComment(member.getId(), board.getId(), commentPatchDto);
        List<Comment> comments = commentService.getComments(board);

        boardService.save(board);
        return new ResponseEntity<>(
                new MultiResponseCommentDto<>(boardId, commentMapper.commentToCommentResponse(comments)),
                HttpStatus.CREATED
        );
    }

    // 댓글 삭제
    @DeleteMapping("board/{board_id}/comment")
    @Secured("ROLE_USER")
    public ResponseEntity deleteComment(@AuthenticationPrincipal PrincipalDetails principal,
                                        @PathVariable("board_id") @Positive Long boardId,
                                        @Validated @RequestBody CommentDeleteDto commentDeleteDto) {
        Member member = memberService.findByUserId(principal.getUsername());
        Board board = boardService.findBoard(boardId);

        if( principal.getMemberId() != board.getMember().getId() ){
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_DELETE_COMMENT);
        }

        // 게시글 댓글 개수 - 1
        board.setCommentAmount(board.getCommentAmount() - 1);

        commentService.deleteComment(member.getId(), board.getId(), commentDeleteDto);
        List<Comment> comments = commentService.getComments(board);

        boardService.save(board);
        return new ResponseEntity<>(
                new MultiResponseCommentDto<>(boardId, commentMapper.commentToCommentResponse(comments)),
                HttpStatus.CREATED
        );
    }
}


/*
        작성하면서 생긴 문제들
    [1] 댓글 수정
    ============================================================================================================================================

        현재 405 error를 해결하지 못하고 있는 상태
            [관련문서]
                1. https://stackoverflow.com/questions/25375046/passing-data-in-the-body-of-a-delete-request
        추정원인
            1. security설정으로 인한 patchMapping을 찾지 못함
            2. tomcat이 patchmapping과 deleteMapping을 지원하지 않음
        해결완료
            단순히 URI를 잘못적었던 문제
    ============================================================================================================================================


 */

