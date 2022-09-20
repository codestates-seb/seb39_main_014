package com.server.soopool.careerMember.entity;

import com.server.soopool.career.entity.Career;
import com.server.soopool.member.entity.Member;
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
public class CareerMember {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ManyToOne 설정
    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    private Member memberId;

    @ManyToOne(targetEntity = Career.class)
    @JoinColumn(name = "career_id")
    private Career careerId;
}
