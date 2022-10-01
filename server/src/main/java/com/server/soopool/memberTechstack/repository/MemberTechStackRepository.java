package com.server.soopool.memberTechstack.repository;

import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.member.entity.Member;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberTechStackRepository extends JpaRepository<MemberTechStack, Long> {
    void deleteAllByMemberId(Long memberId);
    List findByMemberId(Member member);
}
