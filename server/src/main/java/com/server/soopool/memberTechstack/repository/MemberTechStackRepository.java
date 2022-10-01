package com.server.soopool.memberTechstack.repository;

import com.server.soopool.member.entity.Member;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MemberTechStackRepository extends JpaRepository<MemberTechStack, Long> {

    @Transactional
    void deleteAllByMemberId(@Param("memberId") Member member);

    List<MemberTechStack> findByMemberId(Member member);
}
