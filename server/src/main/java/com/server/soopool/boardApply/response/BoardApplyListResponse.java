package com.server.soopool.boardApply.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class BoardApplyListResponse<T> {
    private T boardApplyList;
}
