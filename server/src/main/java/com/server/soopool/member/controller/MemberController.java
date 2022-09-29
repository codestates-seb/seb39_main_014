package com.server.soopool.member.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.bookmark.dto.BookmarkDeleteDto;
import com.server.soopool.bookmark.response.BookmarkListResponse;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.bookmark.mapper.BookmarkMapper;
import com.server.soopool.bookmark.service.BookmarkService;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1")
public class MemberController {

    private final MemberService memberService;
    private final BookmarkService bookmarkService;
    private final BookmarkMapper bookmarkMapper;

    // 마이페이지 북마크 조회
    @GetMapping("my-page/bookmark")
    public ResponseEntity getUserInfoBookmark(@AuthenticationPrincipal PrincipalDetails principal) {
        Member member = memberService.findByUserId("hgd2022");
        List<Bookmark> bookmark = bookmarkService.getUserBookmark(member);

        return new ResponseEntity<>(
                new BookmarkListResponse<>(
                        bookmarkMapper.bookmarkToBookmarkOfUserResponseDto(bookmark)
                ),
                HttpStatus.OK
        );
    }

    // 마이페이지 특정 북마크 삭제
    //todo : RequestDto 해결 및 서비스로직구현
    @DeleteMapping("my-page/bookmark")
    public ResponseEntity deleteUserInfoBookmark(@AuthenticationPrincipal PrincipalDetails principal,
                                                 @RequestBody BookmarkDeleteDto bookmarkDeleteDto) {
        Member member = memberService.findByUserId("hgd2022");
        bookmarkService.deleteBookmark(member, bookmarkDeleteDto.getBookmarkList());
        List<Bookmark> bookmark = bookmarkService.getUserBookmark(member);

        return new ResponseEntity<>(
                new BookmarkListResponse<>(
                        bookmarkMapper.bookmarkToBookmarkOfUserResponseDto(bookmark)
                ),
                HttpStatus.OK
        );
    }



    //     마이페이지 북마크 전체 삭제
//    @DeleteMapping("my-page/bookmark")
//    public ResponseEntity deleteAllUserInfoBookmark(@AuthenticationPrincipal PrincipalDetails principal) {
//        Member member = memberService.findByUserId("hgd2022");
//        bookmarkService.deleteAllBookmark(member);
//        List<Bookmark> bookmark = bookmarkService.getUserBookmark(member);
//
//        return new ResponseEntity<>(
//                new BookmarkListResponse<>(
//                        bookmarkMapper.bookmarkToBookmarkOfUserResponseDto(bookmark)
//                ),
//                HttpStatus.OK
//        );
//    }
}
