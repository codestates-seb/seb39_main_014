package com.server.soopool.career.repository;

import com.server.soopool.career.entity.Career;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CareerRepository extends JpaRepository<Career, Long> {

    Optional<Career> findById(Long id);
}
