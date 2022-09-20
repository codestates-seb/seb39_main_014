package com.server.soopool.location.entity;

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
public class Location {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //enum 컬럼설정
    @Enumerated(EnumType.STRING)
    private LocationName location = LocationName.ETC;


    //enum 설정
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
