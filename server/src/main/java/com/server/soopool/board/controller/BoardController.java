package com.server.soopool.board.controller;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.board.dto.BoardPatchDto;
import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.board.mapper.BoardMapper;
import com.server.soopool.board.service.BoardService;
import com.server.soopool.boardApply.entity.BoardApply;
import com.server.soopool.boardApply.repository.BoardApplyRepository;
import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardCareer.service.BoardCareerService;
import com.server.soopool.boardTechstack.service.BoardTechStackService;
import com.server.soopool.global.dto.MultiResponseDto;
import com.server.soopool.global.dto.SingleResponseDto;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
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
    private final BoardApplyRepository boardApplyRepository;

    // 게시글 등록
    @PostMapping("/write")
    @Secured("ROLE_USER")
    public ResponseEntity postBoard(@AuthenticationPrincipal PrincipalDetails principal,
                                    @RequestBody BoardPostDto boardDto) {

        Member member = memberService.findByUserId(principal.getUsername());

        if(principal.getMemberId() == null){
            throw new BusinessLogicException(ExceptionCode.NEEDED_LOGIN);
        }

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
    @Secured("ROLE_USER")
    public ResponseEntity patchBoard(@AuthenticationPrincipal PrincipalDetails principal
                                    ,@PathVariable("board-id") @Positive long boardId,
                                     @RequestBody BoardPatchDto boardPatchDto){


        Board board = boardService.findBoard(boardId);
        if( principal.getMemberId() != board.getMember().getId() ){
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_MODIFY_BOARD);
        }
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
    @Secured("ROLE_USER")
    public ResponseEntity deleteBoard(@AuthenticationPrincipal PrincipalDetails principal,
                                      @PathVariable("board-id") @Positive long boardId){

        Board board = boardService.findBoard(boardId);
        if( principal.getMemberId() != board.getMember().getId() ){
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_DELETE_BOARD);
        }
        boardService.deleteById(boardId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


    // 인기스택 출력
    @GetMapping("/popstack")
    public List<Map.Entry<String, Integer>> popstack() {
        return boardTechStackService.findPopularTechStack().subList(0, 5);
    }

    @GetMapping("/{board-id}/{career-id}/apply")
    @Secured("ROLE_USER")
    public void applyBoard(@AuthenticationPrincipal PrincipalDetails principal,
                           @PathVariable("board-id") @Positive long boardId,
                           @PathVariable("career-id") int careerId) {
        Member member = memberService.findByUserId(principal.getUsername());
        Board board = boardService.findBoard(boardId);

        if(principal.getMemberId() == null){
            throw new BusinessLogicException(ExceptionCode.NEEDED_LOGIN);
        }

        BoardApply boardApply = new BoardApply();

        List<BoardApply> boardApplies = member.getBoardApplies();
        for(BoardApply boardApply1 : boardApplies) {
            if(boardApply1.getBoardCareer().getBoard().getId() == boardId) {
                throw new BusinessLogicException(ExceptionCode.ALREADY_RECRUIT);
            }
        }

        List<BoardCareer> boardCareers = board.getBoardCareers();

        BoardCareer result = new BoardCareer();
        for(BoardCareer boardCareer : boardCareers) {
            if(boardCareer.getCareer().getId() == careerId) {
                result = boardCareer;
            }
        }

        if(result.getCareerTotalRecruit() <= result.getCareerCurrentRecruit()) {
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_RECRUIT);
        }

        boardApply.setBoardCareer(result);
        boardApply.setMember(member);
        result.setCareerCurrentRecruit(result.getCareerCurrentRecruit() + 1);
        board.setCurrentRecruit(board.getCurrentRecruit() + 1);
        if(board.getCurrentRecruit() == board.getTotalRecruit()) {
            board.setRecruitDone(true);
            boardService.save(board);
        }

        boardApplyRepository.save(boardApply);

    }
}