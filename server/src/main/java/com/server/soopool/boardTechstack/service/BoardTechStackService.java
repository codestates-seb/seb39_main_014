package com.server.soopool.boardTechstack.service;

import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.boardTechstack.repository.BoardTechStackRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardTechStackService {

    private final BoardTechStackRepository boardTechStackRepository;

    public BoardTechStack save(BoardTechStack boardTechStack) {
        return boardTechStackRepository.save(boardTechStack);
    }


    public void deleteALLByBoardId(long boardId) {
        BoardTechStack boardTechStack = boardTechStackRepository.findByBoardId(boardId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.TECHSTACK_NOT_FOUND));
        boardTechStackRepository.delete(boardTechStack);
    }


//    public List<BoardTechStack> findBoardTechStacks(long boardId) {
//        return boardTechStackRepository.findByBoardId(boardId);
//    }
//
//    public void deleteByBoardId(long boardId) {
//        BoardTechStack boardTechStack =
//    }

}
