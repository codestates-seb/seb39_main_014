package com.server.soopool.boardCareer.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.career.entity.Career;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class BoardCareer {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //ManyToOne 컬럼설정
    @ManyToOne(targetEntity = Board.class)
    @JoinColumn(name = "board_id")
    private Board boardId;

    @ManyToOne(targetEntity = Career.class)
    @JoinColumn(name = "career_id")
    private Career careerId;

    //기본컬럼 설정
    @Column(nullable = false)
    private Integer careerTotalRecruit = 0;

    @Column(nullable = false)
    private Integer careerCurrentRecruit = 0;

}
