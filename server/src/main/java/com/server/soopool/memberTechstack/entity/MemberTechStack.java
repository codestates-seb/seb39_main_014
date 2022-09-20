package com.server.soopool.memberTechstack.entity;


import com.server.soopool.member.entity.Member;
import com.server.soopool.techstack.entity.TechStack;

import javax.persistence.*;

/**
 * 작성자 : 김은철
 * 작성핵심 : Entity 연관관계 매핑, 양방향 또는 단방향의 정의
 * 작성일자 : 2022-09-19
 * 최신 수정자 :
 * 최신 수정일자 :
 * email : klmeuncheol@kakao.com
 */
public class MemberTechStack {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //ManyToOne 컬럼설정
    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    private Member memberId;

    @ManyToOne(targetEntity = TechStack.class)
    @JoinColumn(name = "tech_stack_id")
    private TechStack techStackId;
}
