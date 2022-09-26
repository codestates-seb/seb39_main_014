package com.server.soopool.board.mapper;

import com.server.soopool.board.dto.BoardPostDto;
import com.server.soopool.board.dto.BoardResponseDto;
import com.server.soopool.board.entity.Board;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BoardMapper {
    Board boardPostToBoard(BoardPostDto requestBody);

    BoardResponseDto boardToBoardResponse(Board board);

    List<BoardResponseDto> boardsToBoardResponses(List<Board> boards);

}