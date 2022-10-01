package com.server.soopool.board.controller;

import com.server.soopool.board.dto.BoardPatchDto;
import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.dto.BoardResponseDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.mapper.BoardMapper;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardCareer.service.BoardCareerService;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.boardTechstack.service.BoardTechStackService;
import com.server.soopool.career.entity.Career;
import com.server.soopool.career.service.CareerService;
import com.server.soopool.comment.service.CommentService;
import com.server.soopool.global.dto.MultiResponseDto;
import com.server.soopool.global.dto.SingleResponseDto;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import com.server.soopool.techstack.entity.TechStack;
import com.server.soopool.techstack.repository.TechStackRepository;
import com.server.soopool.techstack.service.TechStackService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    private final BoardMapper boardMapper;
    private final MemberService memberService;
    private final CommentService commentService;


    // 게시글 등록
    @PostMapping("/write")
    public ResponseEntity postBoard(@RequestBody BoardPostDto boardDto) {
        Member member = memberService.findByUserId("hgd2022");
        Board board = boardService.createBoard(boardMapper.boardPostToBoard(boardDto));
        board.setMember(member);
        boardService.updateBoardTotalRecruit(board);
        boardService.save(board);

        return new ResponseEntity<>(
                new SingleResponseDto<>(boardMapper.boardToBoardResponse(board))
                , HttpStatus.CREATED);
    }

    // 게시글 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive long boardId,
                                     @RequestBody BoardPatchDto boardPatchDto){

        boardPatchDto.setBoardId(boardId);
        Board board =
                boardService.updateBoard(boardMapper.boardPatchToBoard(boardPatchDto));

        return new ResponseEntity(boardMapper.boardToBoardResponse(board),HttpStatus.OK);
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

    // 스터디 게시글 전체 조회
    @GetMapping("/study")
    public ResponseEntity getStudyBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Board> pageBoards = boardService.findStudyBoards(page - 1, size);
        List<Board> boards = pageBoards.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(boardMapper.boardsToBoardResponses(boards),
                        pageBoards),
                HttpStatus.OK);
    }


    // 프로젝트 게시글 전체 조회
    @GetMapping("/project")
    public ResponseEntity getProjectBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Board> pageBoards = boardService.findProjectBoards(page - 1, size);
        List<Board> boards = pageBoards.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(boardMapper.boardsToBoardResponses(boards),
                        pageBoards),
                HttpStatus.OK);
    }


    // 게시글 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive long boardId){
        boardService.deleteById(boardId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
