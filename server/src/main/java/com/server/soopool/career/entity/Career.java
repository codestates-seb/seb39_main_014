package com.server.soopool.career.entity;

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
public class Career {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    //enum 컬럼설정
    @Enumerated(EnumType.STRING)
    private CareerName careerName = CareerName.ETC;

    //enum 설정
    private enum CareerName{
        FRONT_END("프론트엔드"),
        BACK_END("백엔드"),
        ETC("기타");

        private final String career;

        CareerName(String career) {
            this.career = career;
        }

        public String getCareerName() {
            return career;
        }
    }
}
