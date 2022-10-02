package com.server.soopool.bookmark.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.bookmark.service.BookmarkService;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class BookmarkController {

    private final MemberService memberService;
    private final BoardService boardService;
    private final BookmarkService bookMarkService;

    @GetMapping("/board/{board_id}/bookmark")
    @Secured("ROLE_USER")
    public ResponseEntity getBookmark(@AuthenticationPrincipal PrincipalDetails principal,
                                      @PathVariable("board_id") Long boardId) {
        Member member = memberService.findByUserId(principal.getUsername());
        Board board = boardService.findBoard(boardId);

        if(principal.getMemberId() == null){
            throw new BusinessLogicException(ExceptionCode.NEEDED_LOGIN);
        }

        bookMarkService.howBookmarkService(member, board);

        return new ResponseEntity(HttpStatus.OK);
    }
}
