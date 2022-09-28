package com.server.soopool.bookmark.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class BookmarkListResponse<T> {
    private T bookmarkList;
}
