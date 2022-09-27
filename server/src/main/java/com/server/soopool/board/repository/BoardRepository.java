package com.server.soopool.board.repository;

import com.server.soopool.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    Optional<Board> findById(Long id);

    /*  작성자 : 김은철

           board table의 comment_amount의 값을 설정하기 위한 메소드를 작성하려고 했습니다.
           필요 없으시다고 판단이 들면 지우시면 됩니다.
    */
    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "UPDATE Board b " +
            "SET b.commentAmount = :commentAmount " +
            "WHERE b.memberId = :memberId")
    public void modifyCommentCountColumn();

}
