package com.server.soopool.bookmark.response;

import com.server.soopool.bookmark.entity.Bookmark;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class boardResponseDto {
    private String nickname;
    private Long boardId;
    private List<Long> userBookmarks;
}