package com.server.soopool.board.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.board.dto.BoardPatchDto;
import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.mapper.BoardMapper;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.boardCareer.service.BoardCareerService;
import com.server.soopool.boardTechstack.service.BoardTechStackService;
import com.server.soopool.global.dto.MultiResponseDto;
import com.server.soopool.global.dto.SingleResponseDto;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    private final BoardMapper boardMapper;
    private final MemberService memberService;
    private final BoardCareerService boardCareerService;
    private final BoardTechStackService boardTechStackService;

    // 게시글 등록
    @PostMapping("/write")
    public ResponseEntity postBoard(@AuthenticationPrincipal PrincipalDetails principal,
                                    @RequestBody BoardPostDto boardDto) {
        Member member = memberService.findByUserId(principal.getUsername());
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

        Board board = boardService.findBoard(boardId);
        boardCareerService.deleteBoardCareers(boardId);
        boardTechStackService.deleteBoardTechStacks(boardId);

        Board newBoard = boardMapper.boardPatchToBoard(boardPatchDto, board);
        boardService.updateBoardTotalRecruit(newBoard);
        boardService.save(newBoard);

        return new ResponseEntity(boardMapper.boardToBoardResponse(newBoard),HttpStatus.OK);
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
    public ResponseEntity deleteBoard(@AuthenticationPrincipal PrincipalDetails principal,
                                      @PathVariable("board-id") @Positive long boardId){
        boardService.deleteById(boardId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/popstack")
    public List<Map.Entry<String, Integer>> popstack() {
        return boardTechStackService.findPopularTechStack().subList(0, 5);
    }
}
