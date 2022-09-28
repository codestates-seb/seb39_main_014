package com.server.soopool.bookmark.service;

import com.server.soopool.board.entity.Board;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.bookmark.repository.BookMarkRepository;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@AllArgsConstructor
@Service
public class BookmarkService {

    private final BookMarkRepository bookMarkRepository;
    private final MemberRepository memberRepository;

    public void createBookmark(Member member, Board board) {
        bookMarkRepository.saveByColumns(member,board);
    }

    public void deleteBookmark(Member member, Board board) {
        bookMarkRepository.deleteByColumns(member,board);
    }

    public void deleteBookmark(Member member) {

    }

    public void howBookmarkService(Member member, Board board) {
        Optional<Bookmark> bookmark =
                Optional.ofNullable(bookMarkRepository.findByBookmark(member, board))
                        .orElse(null);

        if(bookmark.isPresent()){
            deleteBookmark(member,board);
        } else {
            createBookmark(member,board);
        }
    }

    public List<Bookmark> getUserBookmark(Member member) {
        Member searchMembers = memberRepository.findById(member.getId()).get();
        List<Bookmark> bookmarks = bookMarkRepository.findByBookmark(searchMembers);

        return bookmarks;
    }
}
