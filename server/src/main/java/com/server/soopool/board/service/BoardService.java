package com.server.soopool.board.service;

import com.server.soopool.board.entity.Board;
import com.server.soopool.board.repository.BoardRepository;
import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardCareer.repository.BoardCareerRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static com.server.soopool.board.entity.Board.RecruitCategory.PROJECT;
import static com.server.soopool.board.entity.Board.RecruitCategory.STUDY;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final BoardCareerRepository boardCareerRepository;

    public Board save(Board board) {
        return boardRepository.save(board);
    }

    public Board createBoard(Board board) {
        Board saveBoard = save(board);
        return board;
    }

    @Transactional(readOnly = true)
    public Board findBoard(long boardId) {
        return findVerifiedBoard(boardId);
    }

    public Page<Board> findBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size,
                Sort.by("id").descending()));
    }

    public Page<Board> findStudyBoards(int page, int size) {
        return boardRepository.findAllByRecruitCategory(
                STUDY, PageRequest.of(page, size,
                        Sort.by("id").descending()));
    }
    public Page<Board> findProjectBoards(int page, int size) {
        return boardRepository.findAllByRecruitCategory(
                PROJECT, PageRequest.of(page, size,
                        Sort.by("id").descending()));
    }

    public void viewCntUp(Board board) {
        board.setViewCount(board.getViewCount() + 1);
        boardRepository.save(board);
    }

    public void updateBoardTotalRecruit(Board board) {
        board.setTotalRecruit(0);
        List<BoardCareer> boardCareers = board.getBoardCareers();
        for(BoardCareer boardCareer : boardCareers) {
            board.setTotalRecruit(board.getTotalRecruit() + boardCareer.getCareerTotalRecruit());
        }
    }

    public Board findVerifiedBoard(long boardId){
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        Board findBoard =
                optionalBoard.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }

    public void deleteById(long boardId) {
        Board board = findVerifiedBoard(boardId);
        boardRepository.delete(board);
    }
}
