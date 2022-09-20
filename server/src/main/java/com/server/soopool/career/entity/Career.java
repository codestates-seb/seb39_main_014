package com.server.soopool.career.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class Career {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    //enum 컬럼설정
    @Enumerated(EnumType.STRING)
    private CareerName careerName;

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
