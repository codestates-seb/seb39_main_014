package com.server.soopool.comment.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Comment extends BaseTimeEntity {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ManyToOne 설정
    @ManyToOne(targetEntity = Board.class)
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    private Member member;

    // 기본컬럼 설정
    @Column(nullable = false)
    private Integer groupNumber;

    @Column(nullable = true) // 대댓글 구현시 false로 변경필요
    private Integer groupSeq;

    @Column(nullable = true) // 대댓글 구현시 false로 변경필요
    private boolean groupDepth = true;

    @Column(nullable = false)
    private String content;

}
