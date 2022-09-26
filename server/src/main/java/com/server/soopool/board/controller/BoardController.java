package com.server.soopool.board.controller;

import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.dto.BoardResponseDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.mapper.BoardMapper;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.global.dto.MultiResponseDto;
import com.server.soopool.global.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("api/v1/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    private final BoardMapper boardMapper;

    // 게시글 등록
    @PostMapping("/write")
    public ResponseEntity postBoard(@RequestBody BoardPostDto boardDto) {
        Board board = boardService.save(boardMapper.boardPostToBoard(boardDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(boardMapper.boardToBoardResponse(board))
                , HttpStatus.CREATED);
    }

    // 게시글 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive long boardId) {

        Board board = boardService.findBoard(boardId);

        boardService.viewCntUp(board);
        return new ResponseEntity<>(
                new SingleResponseDto<>(boardMapper.boardToBoardResponse(board))
                , HttpStatus.OK);
    }

    // 게시글 전체 조회
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Board> pageBoards = boardService.findBoards(page - 1, size);
        List<Board> boards = pageBoards.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(boardMapper.boardsToBoardResponses(boards),
                        pageBoards),
                HttpStatus.OK);
    }

    // 게시글 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity putBoard(@PathVariable("board-id") @Positive long boardId,
                                   @RequestBody BoardPostDto boardPostDto){
        Board board = boardService.findBoard(boardId);
        board.setRecruitMethod(Board.RecruitMethod.valueOf(boardPostDto.getRecruitMethod()));
        board.setLocation(Board.Location.valueOf(boardPostDto.getLocation()));
        board.setPeriod(Board.Period.valueOf(boardPostDto.getPeriod()));
        board.setContact(boardPostDto.getContact());
        board.setTitle(boardPostDto.getTitle());
        board.setContents(boardPostDto.getContents());

        return new ResponseEntity(boardMapper.boardToBoardResponse(boardService.save(board)),HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive long boardId){
        boardService.deleteById(boardId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
