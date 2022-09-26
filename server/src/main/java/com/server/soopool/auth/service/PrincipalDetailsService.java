package com.server.soopool.auth.service;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final MemberService memberService;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        System.out.println("PrincipalDetailsService : 진입");
        Member member = memberService.findByUserId(userId);
        return PrincipalDetails.general(member);
    }

}
