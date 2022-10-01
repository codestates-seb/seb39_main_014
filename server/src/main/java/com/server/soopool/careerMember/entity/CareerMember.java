package com.server.soopool.careerMember.entity;

import com.server.soopool.career.entity.Career;
import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


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
    private Member member;

    @ManyToOne(targetEntity = Career.class)
    @JoinColumn(name = "career_id")
    private Career career;
}
