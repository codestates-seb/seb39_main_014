package com.server.soopool.board.mapper;

import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.dto.BoardResponseDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.career.entity.Career;
import com.server.soopool.member.entity.Member;
import com.server.soopool.techstack.entity.TechStack;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.ArrayList;
import java.util.List;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BoardMapper {
    default Board boardPostToBoard(BoardPostDto boardPostDto) {
        Board board = new Board();
        board.setRecruitCategory( Enum.valueOf( Board.RecruitCategory.class, boardPostDto.getRecruitCategory() ) );
        board.setRecruitMethod( Enum.valueOf( Board.RecruitMethod.class, boardPostDto.getRecruitMethod() ) );
        board.setLocation( Enum.valueOf( Board.Location.class, boardPostDto.getLocation() ) );
        board.setPeriod( Enum.valueOf( Board.Period.class, boardPostDto.getPeriod() ) );
        board.setContact( boardPostDto.getContact() );
        board.setTitle( boardPostDto.getTitle() );
        board.setContents( boardPostDto.getContents() );

        return board;
    }
    default BoardResponseDto boardToBoardResponse(Board board, Member member,
                                                  List<String> techStackNames, List<String> careerNames, List<Integer> boardCareers) {

        BoardResponseDto.BoardResponseDtoBuilder boardResponseDto = BoardResponseDto.builder();
        boardResponseDto.id( board.getId() );
        boardResponseDto.nickName(member.getNickname());
        boardResponseDto.viewCount( board.getViewCount() );
        boardResponseDto.recruitCategory( board.getRecruitCategory().getCategory() );
        boardResponseDto.period( board.getPeriod().getMonth() );
        boardResponseDto.recruitMethod( board.getRecruitMethod().getMethodName() );
        boardResponseDto.location( board.getLocation().getLocationName() );


        List<String> techStackList = new ArrayList<>();
        for(String techStackName : techStackNames) {
            techStackList.add(techStackName);
        }
        boardResponseDto.techStackNames(techStackList);

        List<String> careerList = new ArrayList<>();
        for(String careerName : careerNames) {
            careerList.add(careerName);
        }
        boardResponseDto.careerNames(careerList);

        List<Integer> boardCareerList= new ArrayList<>();
        for(Integer boardCareer : boardCareers) {
            boardCareerList.add(boardCareer);
        }
        boardResponseDto.careerTotalRecruit(boardCareerList);


        boardResponseDto.contact( board.getContact() );
        boardResponseDto.title( board.getTitle() );
        boardResponseDto.contents( board.getContents() );
        boardResponseDto.createdAt( board.getCreatedAt() );
        boardResponseDto.modifiedAt( board.getModifiedAt() );
        boardResponseDto.deletedAt( board.getDeletedAt() );

        return boardResponseDto.build();
    }

    default List<BoardResponseDto> boardsToBoardResponses(List<Board> boards, Member member,
                                                          List<String> techStackNames, List<String> careerNames, List<Integer> boardCareers){
        BoardResponseDto.BoardResponseDtoBuilder boardResponseDtoBuilder = BoardResponseDto.builder();
        List<BoardResponseDto> list = new ArrayList<>();
        for(Board board : boards) {
            list.add(boardToBoardResponse(board, member, techStackNames, careerNames, boardCareers));
        }
        return list;
    }

}