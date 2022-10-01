package com.server.soopool.careerMember.repository;

import com.server.soopool.career.entity.Career;
import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface CareerMemberRepository extends JpaRepository<CareerMember, Long> {
    Optional<CareerMember> findByMemberId(Long memberId);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "UPDATE CareerMember cm " +
            "SET cm.careerLevelName = :setCareerLevelName, cm.career = :setCareer " +
            "WHERE cm.member = :conditionMember AND cm.career = :conditionCareer ")
    // setCareerLevelName String하니까 안 됌
    void updateCareerId(@Param("setCareerLevelName") CareerMember.CareerLevelName setCareerLevelName,
                        @Param("setCareer") Career setCareer,
                        @Param("conditionMember") Member conditionMember,
                        @Param("conditionCareer") Career conditionCareer);
}
