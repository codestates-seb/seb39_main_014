package com.server.soopool.bookmark.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class Bookmark {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    //ManyToone 컬럼설정
    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    public String memberId;

    @ManyToOne(targetEntity = Board.class)
    @JoinColumn(name = "board_id")
    public String boardId;
}
