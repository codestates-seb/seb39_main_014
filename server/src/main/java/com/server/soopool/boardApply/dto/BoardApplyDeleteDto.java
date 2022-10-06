package com.server.soopool.boardApply.dto;

import com.server.soopool.boardApply.request.BoardApplyRequest;
import lombok.Getter;

import java.util.List;

@Getter
public class BoardApplyDeleteDto {
    private List<BoardApplyRequest> applyList;
}
