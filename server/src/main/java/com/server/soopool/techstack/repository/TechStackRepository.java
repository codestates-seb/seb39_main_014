package com.server.soopool.techstack.repository;

import com.server.soopool.techstack.entity.TechStack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechStackRepository extends JpaRepository<TechStack, Long> {
}
