package com.server.soopool.careerLevel.entity;

import com.server.soopool.career.entity.Career;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


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
    private Career careerId;

    //enum 컬럼설정
    @Enumerated(EnumType.STRING)
    private Level careerLevelName;

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
