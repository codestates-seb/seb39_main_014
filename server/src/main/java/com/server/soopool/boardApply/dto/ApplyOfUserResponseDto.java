package com.server.soopool.boardApply.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
@AllArgsConstructor
public class ApplyOfUserResponseDto {
    private Long boardId;
    private String title;
}
