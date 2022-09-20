package com.server.soopool.boardTechstack.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.techstack.entity.TechStack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * 작성자 : 김은철
 * 작성핵심 : Entity 연관관계 매핑, 양방향 또는 단방향의 정의
 * 작성일자 : 2022-09-19
 * 최신 수정자 :
 * 최신 수정일자 :
 * email : klmeuncheol@kakao.com
 */
@Entity
@Getter
@Setter
public class BoardTechStack {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //ManyToOne 컬럼설정
    @ManyToOne(targetEntity = TechStack.class)
    @JoinColumn(name = "tech_stack_id")
    private TechStack techStackId;

    @ManyToOne(targetEntity = Board.class)
    @JoinColumn(name = "board_id")
    private Board boardId;
}
