package com.server.soopool.bookmark.repository;

import com.server.soopool.board.entity.Board;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface BookMarkRepository extends JpaRepository<Bookmark, Long> {
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "INSERT INTO Bookmark(member_id, board_id) " +
            "VALUES (:memberId, :boardId)"
            ,nativeQuery = true)
    void saveByColumns(@Param("memberId") Member member,
                       @Param("boardId") Board board);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "DELETE FROM Bookmark " +
            "WHERE member_id = :memberId AND board_id = :boardId"
            ,nativeQuery = true)
    void deleteByColumns(@Param("memberId") Member member,
                         @Param("boardId") Board board);

    @Query(value = "SELECT b " +
            "FROM Bookmark b " +
            "WHERE b.memberId = :memberId AND b.boardId = :boardId")
    Optional<Bookmark> findByBookmark(@Param("memberId") Member member,
                                      @Param("boardId") Board board);
}
