package com.server.soopool.board.mapper;

import com.server.soopool.board.dto.BoardPatchDto;
import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.dto.BoardResponseDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.boardCareer.dto.BoardCareerResponseDto;
import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardTechstack.dto.BoardTechStackResponseDto;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.career.entity.Career;
import com.server.soopool.techstack.entity.TechStack;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface BoardMapper {
    default Board boardPatchToBoard(BoardPatchDto boardPatchDto, Board board) {
        board.setRecruitCategory( Enum.valueOf( Board.RecruitCategory.class, boardPatchDto.getRecruitCategory() ));
        board.setRecruitMethod( Enum.valueOf( Board.RecruitMethod.class, boardPatchDto.getRecruitMethod() ) );
        board.setLocation( Enum.valueOf( Board.Location.class, boardPatchDto.getLocation() ) );
        board.setPeriod( Enum.valueOf( Board.Period.class, boardPatchDto.getPeriod() ) );
        board.setContact( boardPatchDto.getContact() );
        board.setTitle( boardPatchDto.getTitle() );
        board.setContents( boardPatchDto.getContents() );

        List<BoardCareer> boardCareers = boardPatchDto.getBoardCareers().stream()
                .map(boardCareerDto -> {
                    BoardCareer boardCareer = new BoardCareer();
                    Career career = new Career();
                    boardCareer.addBoard(board);
                    boardCareer.addCareer(career);
                    career.setId(boardCareerDto.getCareerId());
                    boardCareer.setCareerTotalRecruit(boardCareerDto.getCareerTotalRecruit());
                    return boardCareer;
                }).collect(Collectors.toList());

        List<BoardTechStack> boardTechStacks = boardPatchDto.getBoardTechStacks().stream()
                .map(boardTechStackDto -> {
                    BoardTechStack boardTechStack = new BoardTechStack();
                    TechStack techStack = new TechStack();
                    techStack.setId(boardTechStackDto.getTechStackId());
                    boardTechStack.addBoard(board);
                    boardTechStack.addTechStack(techStack);
                    return boardTechStack;
                }).collect(Collectors.toList());

        board.setBoardCareers(boardCareers);
        board.setBoardTechStacks(boardTechStacks);

        return board;
    }


    default Board boardPostToBoard(BoardPostDto boardPostDto) {
        Board board = new Board();
        board.setRecruitCategory( Enum.valueOf( Board.RecruitCategory.class, boardPostDto.getRecruitCategory() ) );
        board.setRecruitMethod( Enum.valueOf( Board.RecruitMethod.class, boardPostDto.getRecruitMethod() ) );
        board.setLocation( Enum.valueOf( Board.Location.class, boardPostDto.getLocation() ) );
        board.setPeriod( Enum.valueOf( Board.Period.class, boardPostDto.getPeriod() ) );
        board.setContact( boardPostDto.getContact() );
        board.setTitle( boardPostDto.getTitle() );
        board.setContents( boardPostDto.getContents() );

        List<BoardCareer> boardCareers = boardPostDto.getBoardCareers().stream()
                .map(boardCareerDto -> {
                    BoardCareer boardCareer = new BoardCareer();
                    Career career = new Career();
                    boardCareer.addBoard(board);
                    boardCareer.addCareer(career);
                    career.setId(boardCareerDto.getCareerId());
                    boardCareer.setCareerTotalRecruit(boardCareerDto.getCareerTotalRecruit());
                    return boardCareer;
                }).collect(Collectors.toList());

        List<BoardTechStack> boardTechStacks = boardPostDto.getBoardTechStacks().stream()
                .map(boardTechStackDto -> {
                    BoardTechStack boardTechStack = new BoardTechStack();
                    TechStack techStack = new TechStack();
                    techStack.setId(boardTechStackDto.getTechStackId());
                    boardTechStack.addBoard(board);
                    boardTechStack.addTechStack(techStack);
                    return boardTechStack;
                }).collect(Collectors.toList());

        board.setBoardCareers(boardCareers);
        board.setBoardTechStacks(boardTechStacks);

        return board;
    }

    default BoardResponseDto boardToBoardResponse(Board board) {
        List<BoardCareer> boardCareers = board.getBoardCareers();
        List<BoardTechStack> boardTechStacks = board.getBoardTechStacks();


        BoardResponseDto boardResponseDto = new BoardResponseDto();
        boardResponseDto.setId(board.getId());
        boardResponseDto.setNickName(board.getMember().getNickname());
        boardResponseDto.setViewCount(board.getViewCount());
        boardResponseDto.setRecruitCategory(board.getRecruitCategory().getCategory());
        boardResponseDto.setPeriod(board.getPeriod().getMonth());
        boardResponseDto.setRecruitMethod(board.getRecruitMethod().getMethodName());
        boardResponseDto.setLocation(board.getLocation().getLocationName());
        boardResponseDto.setTechStackNames(
                boardTechStacksToBoardTechStackResponses(boardTechStacks)
        );
        boardResponseDto.setContact(board.getContact());
        boardResponseDto.setBoardCareers(
                boardCareersToBoardCareerResponses(boardCareers)
        );
        boardResponseDto.setTitle(board.getTitle());
        boardResponseDto.setContents(board.getContents());
        boardResponseDto.setCommentAmount(board.getComments().size());
        boardResponseDto.setTotalRecruit(board.getTotalRecruit());
        boardResponseDto.setBookmarkCount(board.getBookmarks().size());
        boardResponseDto.setCreatedAt(board.getCreatedAt());
        boardResponseDto.setModifiedAt(board.getModifiedAt());
        boardResponseDto.setDeletedAt(board.getDeletedAt());
        boardResponseDto.setRecruitDone(board.isRecruitDone());

        return boardResponseDto;

    }

    List<BoardResponseDto> boardsToBoardResponses(List<Board> boards);

    default List<BoardTechStackResponseDto>  boardTechStacksToBoardTechStackResponses(List<BoardTechStack> boardTechStacks) {
        return boardTechStacks
                .stream()
                .map(boardTechStack -> BoardTechStackResponseDto
                        .builder()
                        .techStackName(boardTechStack.getTechStack().getTechStackName())
                        .build())
                .collect(Collectors.toList());
    }

    default List<BoardCareerResponseDto> boardCareersToBoardCareerResponses(List<BoardCareer> boardCareers) {
        return boardCareers
                .stream()
                .map(boardCareer -> BoardCareerResponseDto
                        .builder()
                        .careerName(boardCareer.getCareer().getCareerName())
                        .careerTotalRecruit(boardCareer.getCareerTotalRecruit())
                        .build())
                .collect(Collectors.toList());
    }

}






















