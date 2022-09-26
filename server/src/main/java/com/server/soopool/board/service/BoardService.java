package com.server.soopool.board.service;

import com.server.soopool.board.entity.Board;
import com.server.soopool.board.repository.BoardRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public Board save(Board board) {
        return boardRepository.save(board);
    }

    @Transactional(readOnly = true)
    public Board findBoard(long boardId) {
        return findVerifiedBoard(boardId);
    }

    public Page<Board> findBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size, Sort.by("id")));
    }

    public void viewCntUp(Board board) {
        board.setViewCount(board.getViewCount() + 1);
        boardRepository.save(board);
    }

    public Board findVerifiedBoard(long boardId){
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return board;
    }

    public void deleteById(long boardId) {
        Board board = findVerifiedBoard(boardId);
        boardRepository.delete(board);
    }

    /*  작성자 : 김은철

           board table의 comment_amount의 값을 설정하기 위한 메소드를 작성하려고 했습니다.
           필요 없으시다고 판단이 들면 지우시면 됩니다.
    */
//    public void commentCount(Board board) {
//        boardRepository.modifyCommentCountColumn();
//    }
}
