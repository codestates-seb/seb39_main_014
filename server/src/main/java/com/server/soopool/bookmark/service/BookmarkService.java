package com.server.soopool.bookmark.service;

import com.server.soopool.board.entity.Board;
import com.server.soopool.board.repository.BoardRepository;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.bookmark.repository.BookMarkRepository;
import com.server.soopool.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class BookmarkService {

    private final BookMarkRepository bookMarkRepository;
    private final BoardRepository boardRepository;

    public void createBookmark(Member member, Board board) {
        bookMarkRepository.saveByColumns(member,board);
    }

    public void deleteBookmark(Member member, Board board) {
        bookMarkRepository.deleteByColumns(member,board);
    }

    public void howBookmarkService(Member member, Board board) {
        Optional<Bookmark> bookmark =
                Optional.ofNullable(bookMarkRepository.findByBookmark(member, board))
                        .orElse(null);

        if(bookmark.isPresent()){
            deleteBookmark(member,board);
            board.setBookmarkCount(board.getBookmarkCount() - 1);
            boardRepository.save(board);
        } else {
            createBookmark(member,board);
            board.setBookmarkCount(board.getBookmarkCount() + 1);
            boardRepository.save(board);
        }
    }
}
