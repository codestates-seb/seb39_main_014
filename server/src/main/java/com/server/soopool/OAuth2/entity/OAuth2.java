package com.server.soopool.OAuth2.entity;

import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class OAuth2 {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // OneToOne 설정
    @OneToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    private Member memberId;

    //기본컬럼 설정

}
