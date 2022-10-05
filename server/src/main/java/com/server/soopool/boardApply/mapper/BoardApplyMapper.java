package com.server.soopool.boardApply.mapper;

import com.server.soopool.boardApply.dto.ApplyOfUserResponseDto;
import com.server.soopool.boardApply.dto.BoardApplyResponseDto;
import com.server.soopool.boardApply.entity.BoardApply;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BoardApplyMapper {

    public ApplyOfUserResponseDto applyToApplyListResponse(BoardApply boardApply) {
        ApplyOfUserResponseDto.ApplyOfUserResponseDtoBuilder applyOfUserResponseDtoBuilder = ApplyOfUserResponseDto.builder();
        applyOfUserResponseDtoBuilder.boardId(boardApply.getBoardCareer().getBoard().getId());
        applyOfUserResponseDtoBuilder.title(boardApply.getBoardCareer().getBoard().getTitle());

        return applyOfUserResponseDtoBuilder.build();

    }

    public List<ApplyOfUserResponseDto> appliesToApplyListResponses(List<BoardApply> boardApplies) {
        List<ApplyOfUserResponseDto> list = new ArrayList<>();
        for(BoardApply boardApply : boardApplies) {
            list.add(applyToApplyListResponse(boardApply));
        }
        return list;
    }
}
