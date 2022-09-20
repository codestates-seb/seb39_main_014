package com.server.soopool.location.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class Location {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //enum 컬럼설정
    @Enumerated(EnumType.STRING)
    private LocationName location = LocationName.ETC;


    //enum 설정
    //TODO : 추후, 상수값 추가
    private enum LocationName{
        SEOUL("서울"),
        GYEONGGI("경기"),
        GANGWON("강원"),
        ETC("기타");
        private final String name;

        LocationName(String name) {
            this.name = name;
        }
    }

}
