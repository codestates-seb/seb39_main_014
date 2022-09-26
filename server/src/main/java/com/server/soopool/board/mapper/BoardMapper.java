package com.server.soopool.board.mapper;

import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.dto.BoardResponseDto;
import com.server.soopool.board.entity.Board;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.techstack.entity.TechStack;
import lombok.AllArgsConstructor;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BoardMapper {
    Board boardPostToBoard(BoardPostDto boardPostDto);
    BoardResponseDto boardToBoardResponse(Board board);

    List<BoardResponseDto> boardsToBoardResponses(List<Board> boards);

}