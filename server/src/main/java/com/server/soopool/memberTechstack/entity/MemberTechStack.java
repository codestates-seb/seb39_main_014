package com.server.soopool.memberTechstack.entity;


import com.server.soopool.member.entity.Member;
import com.server.soopool.techstack.entity.TechStack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;



@Entity
@Getter
@Setter
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
