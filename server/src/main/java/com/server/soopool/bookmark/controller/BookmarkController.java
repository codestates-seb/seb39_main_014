package com.server.soopool.bookmark.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.bookmark.response.boardResponseDto;
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

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class BookmarkController {

    private final MemberService memberService;
    private final BoardService boardService;
    private final BookmarkService bookMarkService;

    @GetMapping("/board/{board_id}/bookmark")
    public ResponseEntity getBookmark(@AuthenticationPrincipal PrincipalDetails principal,
                                      @PathVariable("board_id") Long boardId) {
        Member member = memberService.findByUserId(principal.getUsername());

        List<Bookmark> bookmarks =  bookMarkService.getUserBookmark(member);
        List<Long> bookmarksBoardId = new ArrayList<>();

        for(Bookmark e : bookmarks) {
            bookmarksBoardId.add(e.getBoard().getId());
        }
        return new ResponseEntity(
                (boardResponseDto.builder()
                        .nickname(member.getNickname())
                        .boardId(boardId)
                        .userBookmarks(bookmarksBoardId)
                        .build())
                ,HttpStatus.OK);
    }




    @PostMapping("/board/{board_id}/bookmark")
    @Secured("ROLE_USER")
    public ResponseEntity postBookmark(@AuthenticationPrincipal PrincipalDetails principal,
                                       @PathVariable("board_id") Long boardId) {
        Member member = memberService.findByUserId(principal.getUsername());
        Board board = boardService.findBoard(boardId);

        if(principal.getMemberId() == null){
            throw new BusinessLogicException(ExceptionCode.NEEDED_LOGIN);
        }

        bookMarkService.howBookmarkService(member, board);
        List<Bookmark> bookmarks =  bookMarkService.getUserBookmark(member);
        List<Long> bookmarksBoardId = new ArrayList<>();

        for(Bookmark e : bookmarks) {
            bookmarksBoardId.add(e.getBoard().getId());
        }

        return new ResponseEntity(
                (boardResponseDto.builder()
                        .nickname(member.getNickname())
                        .boardId(boardId)
                        .userBookmarks(bookmarksBoardId)
                        .build())
                ,HttpStatus.OK);
    }
}
