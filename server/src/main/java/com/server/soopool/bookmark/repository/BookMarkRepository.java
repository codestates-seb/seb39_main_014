package com.server.soopool.bookmark.repository;

import com.server.soopool.board.entity.Board;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface BookMarkRepository extends JpaRepository<Bookmark, Long> {
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "INSERT INTO Bookmark(member_id, board_id) " +
            "VALUES (:member, :board)"
            ,nativeQuery = true)
    void saveByColumns(@Param("member") Member member,
                       @Param("board") Board board);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "DELETE FROM Bookmark " +
            "WHERE member_id = :member AND board_id = :board"
            ,nativeQuery = true)
    void deleteByColumns(@Param("member") Member member,
                         @Param("board") Board board);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "DELETE FROM Bookmark " +
            "WHERE member_id = :member AND board_id = :board"
            ,nativeQuery = true)
    void deleteByColumns(@Param("member") Member member,
                         @Param("board") Integer id);

    @Query(value = "SELECT b " +
            "FROM Bookmark b " +
            "WHERE b.member = :member AND b.board = :board")
    Optional<Bookmark> findByBookmark(@Param("member") Member member,
                                      @Param("board") Board board);


    @Query(value = "SELECT b " +
            "FROM Bookmark b " +
            "WHERE b.member = :member ")
    List<Bookmark> findByBookmark(@Param("member") Member member);
}
