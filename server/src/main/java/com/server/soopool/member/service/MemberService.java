package com.server.soopool.member.service;

import com.server.soopool.member.entity.Member;
import com.server.soopool.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member findByUserId(String userId) {
        Member member = isNotNull(userId);
        return member;
    }

    public Member isNotNull(String userId) {
        Optional<Member> member = Optional
                .ofNullable(memberRepository.findByUserId(userId))
                .orElseThrow(() -> new RuntimeException()); // 사용자 정의 Exception 설정 필요
        return member.get();
    }
}
