package com.server.soopool.techstack.entity;

import com.server.soopool.memberTechstack.entity.MemberTechStack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

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
public class TechStack {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //기본컬럼 설정
    @Enumerated(EnumType.STRING)
    private TechStackName techStackName;

    //enum 정의
    private enum TechStackName {
        JAVA("자바"),
        PYTHON("파이썬"),
        JAVASCRIPT("자바스크립트");

        private final String name;

        TechStackName(String name) {
            this.name = name;
        }

        String getName() {
            return this.name;
        }
    }
}
