package com.server.soopool.member.controller;

import com.server.soopool.auth.PrincipalDetails;
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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1")
public class MemberController {

    private final MemberService memberService;
    private final BookmarkService bookmarkService;
    private final BookmarkMapper bookmarkMapper;

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

    @DeleteMapping("my-page/bookmark")
    public ResponseEntity deleteUserInfoBookmark(@AuthenticationPrincipal PrincipalDetails principal){
        Member member = memberService.findByUserId("hgd2022");
//        List<Bookmark> bookmark = bookmarkService.deleteBookmark(member);

        return null;
    }
}
