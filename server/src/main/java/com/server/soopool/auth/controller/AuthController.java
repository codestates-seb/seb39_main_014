package com.server.soopool.auth.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.auth.dto.SignUpRequestDto;
import com.server.soopool.auth.service.JwtService;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/")
public class AuthController {

    private final MemberService memberService;
    private final JwtService jwtService;

    @PostMapping("sign-up")
    public ResponseEntity signUp(@Valid @RequestBody SignUpRequestDto signUpRequestDto){
        Member member = signUpRequestDto.toMember();
        memberService.signUpGeneral(member);
        return new ResponseEntity<>("회원가입이 완료되었습니다 !", HttpStatus.CREATED);
    }

    @PostMapping("auth/refresh")
    public ResponseEntity refresh(HttpServletRequest request, HttpServletResponse response){
        jwtService.refresh(request,response);
        return new ResponseEntity("토큰을 재발급 하였습니다 !", HttpStatus.OK);
    }

    @GetMapping("authtest")
    @Secured("ROLE_USER")
    public String authTest(@AuthenticationPrincipal PrincipalDetails principal){
        return principal.getUsername();
    }
}
