package com.server.soopool.bookmark.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class BookmarkOfUserResponseDto {
    private Long boardId;
    private String title;
}
