package com.server.soopool.careerLevel.entity;

import com.server.soopool.career.entity.Career;
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
public class CareerLevel {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //ManyToOne 컬럼설정
    @ManyToOne
    @JoinColumn(name = "career_id")
    private Career career;

    //enum 컬럼설정
    @Enumerated
    private Level careerLevelName = Level.BEGINNER;

    //enum 설정
    private enum Level{
        BEGINNER("초보"),
        INTERMEDIATE("중수"),
        MASTER("고수");

        private final String level;

        Level(String level) {
            this.level = level;
        }

        public String getLevel() {return level;}

    }
}
