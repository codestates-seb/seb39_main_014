package com.server.soopool.board.controller;

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
import com.server.soopool.global.dto.MultiResponseDto;
import com.server.soopool.global.dto.SingleResponseDto;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import com.server.soopool.techstack.entity.TechStack;
import com.server.soopool.techstack.repository.TechStackRepository;
import com.server.soopool.techstack.service.TechStackService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
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
    private final BoardTechStackService boardTechStackService;
    private final BoardCareerService boardCareerService;

    private final TechStackService techStackService;
    private final CareerService careerService;


    // 게시글 등록
    @PostMapping("/write")
    public ResponseEntity postBoard(@RequestBody BoardPostDto boardDto) {
        Board board = boardService.save(boardMapper.boardPostToBoard(boardDto));
        Member member = memberService.findByUserId("hgd2022");
        board.setMemberId(member);

        List<String> techStackNames = new ArrayList<>();
        for(TechStack techStack : boardDto.getTechStacks()) {
            BoardTechStack boardTechStack = new BoardTechStack();
            boardTechStack.setBoardId(board);
            boardTechStack.setTechStackId(techStack);
            boardTechStackService.save(boardTechStack);

            TechStack techStack1 = techStackService.findTechStack(techStack.getId());
            techStackNames.add(techStack1.getTechStackName());
        }

        List<String> careerNames = new ArrayList<>();
        List<Integer> boardCareers = new ArrayList<>();

        for(int i = 0; i < boardDto.getCareers().size(); i++) {
            BoardCareer boardCareer = new BoardCareer();
            boardCareer.setBoardId(board);
            boardCareer.setCareerId(boardDto.getCareers().get(i));
            boardCareer.setCareerTotalRecruit(boardDto.getBoardCareers().get(i).getCareerTotalRecruit());
            boardCareerService.save(boardCareer);

            Career career1 = careerService.findCareer(boardDto.getCareers().get(i).getId());
            careerNames.add(career1.getCareerName());
            boardCareers.add(boardDto.getBoardCareers().get(i).getCareerTotalRecruit());
        }

        return new ResponseEntity<>(
                new SingleResponseDto<>(boardMapper.boardToBoardResponse(board, member, techStackNames, careerNames, boardCareers))
                , HttpStatus.CREATED);
    }

    // 게시글 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive long boardId) {

        Board board = boardService.findBoard(boardId);
        Member member = memberService.findByUserId("hgd2022");
        List<String> techStackNames = new ArrayList<>();
        List<String> careerNames = new ArrayList<>();
        List<Integer> boardCareers = new ArrayList<>();
        boardService.viewCntUp(board);
        return new ResponseEntity<>(
                new SingleResponseDto<>(boardMapper.boardToBoardResponse(board, member, techStackNames, careerNames, boardCareers))
                , HttpStatus.OK);
    }

    // 게시글 전체 조회
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Board> pageBoards = boardService.findBoards(page - 1, size);
        List<Board> boards = pageBoards.getContent();
        Member member = memberService.findByUserId("hgd2022");

        List<String> techStackNames = new ArrayList<>();
        List<String> careerNames = new ArrayList<>();
        List<Integer> boardCareers = new ArrayList<>();

        return new ResponseEntity<>(
                new MultiResponseDto<>(boardMapper.boardsToBoardResponses(boards, member, techStackNames, careerNames, boardCareers),
                        pageBoards),
                HttpStatus.OK);
    }

//    // 게시글 수정
//    @PutMapping("/{board-id}")
//    public ResponseEntity putBoard(@PathVariable("board-id") @Positive long boardId,
//                                   @RequestBody BoardPostDto boardPostDto){
//        Board board = boardService.findBoard(boardId);
//        Member member = memberService.findByUserId("hgd2022");
//        board.setRecruitMethod(Board.RecruitMethod.valueOf(boardPostDto.getRecruitMethod()));
//        board.setLocation(Board.Location.valueOf(boardPostDto.getLocation()));
//        board.setPeriod(Board.Period.valueOf(boardPostDto.getPeriod()));
//        board.setContact(boardPostDto.getContact());
//        board.setTitle(boardPostDto.getTitle());
//        board.setContents(boardPostDto.getContents());
//
////        boardTechStackService.deleteALLByBoardId(boardId);
//
//        List<String> techStackNames = new ArrayList<>();
//        for(TechStack techStack : boardPostDto.getTechStacks()) {
//            BoardTechStack boardTechStack = new BoardTechStack();
//            boardTechStack.setBoardId(board);
//            boardTechStack.setTechStackId(techStack);
//            boardTechStackService.save(boardTechStack);
//
//            TechStack techStack1 = techStackService.findTechStack(techStack.getId());
//            techStackNames.add(techStack1.getTechStackName());
//        }
//
//        List<String> careerNames = new ArrayList<>();
//        for(Career career : boardPostDto.getCareers()) {
//            BoardCareer boardCareer = new BoardCareer();
//            boardCareer.setBoardId(board);
//            boardCareer.setCareerId(career);
//            boardCareerService.save(boardCareer);
//
//            Career career1 = careerService.findCareer(career.getId());
//            careerNames.add(career1.getCareerName());
//        }
//
//        return new ResponseEntity(boardMapper.boardToBoardResponse(boardService.save(board), member,
//                techStackNames, careerNames),HttpStatus.OK);
//    }

    // 게시글 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive long boardId){
        boardService.deleteById(boardId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
