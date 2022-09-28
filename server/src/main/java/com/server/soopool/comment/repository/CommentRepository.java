package com.server.soopool.comment.repository;

import com.server.soopool.board.entity.Board;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<BoardIdAndGroupNumberMapping> findByBoardId(Board boardId);

    // boardId의 조건에 부합하는 모든 comments를 조회합니다.
    @Query(value = "SELECT c " +
            "FROM Comment c " +
            "WHERE c.boardId = :boardId")
    List<Comment> getComments(@Param("boardId") Board board);

    // boardId, memberId, groupNumber의 조건에 부합하는 contentColumn을 수정합니다.
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "UPDATE Comment c " +
            "SET c.content = :content " +
            "WHERE c.boardId = :boardId AND c.memberId = :memberId AND c.groupNumber = :groupNumber")
    void updateComment(@Param("content") String content,
                       @Param("boardId") Board board,
                       @Param("memberId") Member member,
                       @Param("groupNumber") Integer groupNumber);

    // boardId, memberId, groupNumber의 조건에 부합하는 Comment table의 row들을 조회합니다.
    @Query(value = "SELECT c " +
            "FROM Comment c " +
            "WHERE c.boardId = :boardId AND c.memberId = :memberId AND c.groupNumber = :groupNumber")
    Comment getCommentMatchingMemberIdAndBoardIdAAndGroupNumber(@Param("boardId") Board boardId,
               @Param("memberId") Member member,
               @Param("groupNumber") Integer groupNumber);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "DELETE FROM Comment c " +
            "WHERE c.boardId = :boardId AND c.memberId = :memberId AND c.groupNumber = :groupNumber")
    void deleteComment(@Param("boardId") Board board,
                       @Param("memberId") Member member,
                       @Param("groupNumber") Integer groupNumber);

}
