package com.server.soopool.careerMember.repository;

import com.server.soopool.careerMember.entity.CareerMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerMemberRepository extends JpaRepository<CareerMember, Long> {
}
