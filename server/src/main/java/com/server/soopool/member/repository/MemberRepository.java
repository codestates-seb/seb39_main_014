package com.server.soopool.member.repository;

import com.server.soopool.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByUserId(String userId);
    Optional<Member> findById(Long Id);
    boolean existsById(Long id);
    boolean existsByUserId(String userId);
    boolean existsByEmail(String email);
}
