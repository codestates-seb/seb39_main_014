package com.server.soopool.member.controller;

import com.nimbusds.openid.connect.sdk.claims.UserInfo;
import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.bookmark.dto.BookmarkDeleteDto;
import com.server.soopool.bookmark.response.BookmarkListResponse;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.bookmark.mapper.BookmarkMapper;
import com.server.soopool.bookmark.service.BookmarkService;
import com.server.soopool.career.request.UserInfoCareerRequest;
import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.careerMember.service.CareerMemberService;
import com.server.soopool.member.dto.UserInfoDto;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.response.UserInfoResponse;
import com.server.soopool.member.response.UserInfoResponseDto;
import com.server.soopool.member.service.MemberService;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import com.server.soopool.memberTechstack.service.MemberTechstackService;
import com.server.soopool.techstack.entity.TechStack;
import com.server.soopool.techstack.request.UserInfoTechStackRequest;
import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1")
public class MemberController {

    private final MemberService memberService;
    private final BookmarkService bookmarkService;
    private final BookmarkMapper bookmarkMapper;
    private final CareerMemberService careerMemberService;

    private final MemberTechstackService memberTechStackService;

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

    // 회원정보 info 가져오기
    @GetMapping("my-page/info")
    public ResponseEntity getUserInfo(@AuthenticationPrincipal PrincipalDetails principal) {

        Member member = memberService.findByUserId("hgd2022");
        List<UserInfoCareerRequest> userInfoCareerRequests = new ArrayList<>();
        UserInfoCareerRequest userInfoCareerRequest = new UserInfoCareerRequest();
        if(member.getCareerMembers().size() != 0) {
            userInfoCareerRequest.setName(member.getCareerMembers().get(0).getCareerId().getCareerName());
        }
        if(member.getCareerMembers().size() != 0) {
            userInfoCareerRequest.setLevel(member.getCareerMembers().get(0).getCareerLevelName().getName());
        }
        userInfoCareerRequests.add(userInfoCareerRequest);

        List<UserInfoTechStackRequest> userInfoTechStackRequests = new ArrayList<>();
        for(MemberTechStack memberTechStack1 : member.getMemberTechStacks()) {
            UserInfoTechStackRequest userInfoTechStackRequest1 = new UserInfoTechStackRequest();
            userInfoTechStackRequest1.setName(memberTechStack1.getTechStackId().getTechStackName());
            userInfoTechStackRequest1.setImageUri(memberTechStack1.getTechStackId().getImageUri());
            userInfoTechStackRequests.add(userInfoTechStackRequest1);
        }

        UserInfoResponseDto userInfoResponseDto = new UserInfoResponseDto();
        userInfoResponseDto.setNickname(member.getNickname());
        userInfoResponseDto.setActiveScore(0);
        userInfoResponseDto.setCareer(userInfoCareerRequests);
        userInfoResponseDto.setTechStack(userInfoTechStackRequests);

        return new ResponseEntity<>(userInfoResponseDto,HttpStatus.OK);
    }

    @PostMapping("my-page/info")
    @Transactional
    public ResponseEntity postUserInfo(@AuthenticationPrincipal PrincipalDetails principal,
                                       @RequestBody UserInfoDto userInfoDto) {
        //Member nickname 변경
        Member member = memberService.findByUserId("hgd2022");
        memberService.setMemberNickname(member, userInfoDto.getNickname());

        // Member career 추가 및 변경
        Optional<CareerMember> careerMember = careerMemberService.getCareerMember(member);
        careerMemberService.setCareerMember(member, careerMember, userInfoDto.getCareer());

        // TechStack 추가
        List<MemberTechStack> memberTechStack = memberTechStackService.getMemberTechStack(member);
        memberTechStackService.setMemberTechStack(member, memberTechStack,userInfoDto.getTechStack());

        //
        List<UserInfoCareerRequest> userInfoCareerRequests = new ArrayList<>();
        UserInfoCareerRequest userInfoCareerRequest = new UserInfoCareerRequest();
        if(member.getCareerMembers().size() != 0) {
            userInfoCareerRequest.setName(member.getCareerMembers().get(0).getCareerId().getCareerName());
        }
        if(member.getCareerMembers().size() != 0) {
            userInfoCareerRequest.setLevel(member.getCareerMembers().get(0).getCareerLevelName().getName());
        }
        userInfoCareerRequests.add(userInfoCareerRequest);

        List<UserInfoTechStackRequest> userInfoTechStackRequests = new ArrayList<>();
        for(MemberTechStack memberTechStack1 : member.getMemberTechStacks()) {
            UserInfoTechStackRequest userInfoTechStackRequest1 = new UserInfoTechStackRequest();
            userInfoTechStackRequest1.setName(memberTechStack1.getTechStackId().getTechStackName());
            userInfoTechStackRequests.add(userInfoTechStackRequest1);
        }

        UserInfoResponseDto userInfoResponseDto = new UserInfoResponseDto();
        userInfoResponseDto.setNickname(member.getNickname());
        userInfoResponseDto.setActiveScore(0);
        userInfoResponseDto.setCareer(userInfoCareerRequests);
        userInfoResponseDto.setTechStack(userInfoTechStackRequests);

        return new ResponseEntity<>(userInfoResponseDto,HttpStatus.OK);
    }
}


/*
    마이페이지 북마크 전체 삭제 (작성자 김은철)
     - 사용되어질 수 있어서 빼놨습니다.
     - 지우지 말아주세요.

        @DeleteMapping("my-page/bookmark")
        public ResponseEntity deleteAllUserInfoBookmark(@AuthenticationPrincipal PrincipalDetails principal) {
            Member member = memberService.findByUserId("hgd2022");
            bookmarkService.deleteAllBookmark(member);
            List<Bookmark> bookmark = bookmarkService.getUserBookmark(member);

            return new ResponseEntity<>(
                    new BookmarkListResponse<>(
                            bookmarkMapper.bookmarkToBookmarkOfUserResponseDto(bookmark)
                    ),
                    HttpStatus.OK
            );
        }

*/
