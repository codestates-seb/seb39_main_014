package com.server.soopool.boardTechstack.repository;

import com.server.soopool.boardTechstack.entity.BoardTechStack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardTechStackRepository extends JpaRepository<BoardTechStack, Long> {

    void deleteAllByBoardId(Long boardId);

    List<BoardTechStack> findByTechStackId(Long techStackId);
}
