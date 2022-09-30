package com.server.soopool.bookmark.dto;

import com.server.soopool.bookmark.request.BookmarkRequest;
import lombok.Getter;

import java.util.List;


@Getter
public class BookmarkDeleteDto {
    private List<BookmarkRequest> bookmarkList;
}