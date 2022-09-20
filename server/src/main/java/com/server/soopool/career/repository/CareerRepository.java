package com.server.soopool.career.repository;

import com.server.soopool.career.entity.Career;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerRepository extends JpaRepository<Career, Long> {
}
