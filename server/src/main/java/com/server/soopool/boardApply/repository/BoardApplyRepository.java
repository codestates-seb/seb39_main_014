package com.server.soopool.boardApply.repository;

import com.server.soopool.boardApply.entity.BoardApply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardApplyRepository extends JpaRepository<BoardApply, Long> {
}
