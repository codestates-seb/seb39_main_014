package com.server.soopool.techstack.repository;

import com.server.soopool.techstack.entity.TechStack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TechStackRepository extends JpaRepository<TechStack, Long> {
}


