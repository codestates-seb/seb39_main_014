package com.server.soopool.boardCareer.repository;

import com.server.soopool.boardCareer.entity.BoardCareer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardCareerRepository extends JpaRepository<BoardCareer, Long> {
    void deleteAllByBoardId(Long boardId);
}
