package com.server.soopool.bookmark.mapper;

import com.server.soopool.bookmark.dto.BookmarkOfUserResponseDto;
import com.server.soopool.bookmark.entity.Bookmark;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BookmarkMapper {

    public List<BookmarkOfUserResponseDto> bookmarkToBookmarkOfUserResponseDto(List<Bookmark> bookmarks) {
        List<BookmarkOfUserResponseDto> list = new ArrayList<>();
        for(Bookmark e : bookmarks) {
            list.add(bookmarkToBookmarkListResponse(e));
        }
        return list;
    }
    public BookmarkOfUserResponseDto bookmarkToBookmarkListResponse(Bookmark bookmark) {
        BookmarkOfUserResponseDto.BookmarkOfUserResponseDtoBuilder bookmarkListResponseDto = BookmarkOfUserResponseDto.builder();
        bookmarkListResponseDto.boardId(bookmark.getBoardId().getId());
        bookmarkListResponseDto.title(bookmark.getBoardId().getTitle());

        return bookmarkListResponseDto.build();
    }
}
