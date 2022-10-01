package com.server.soopool.career.entity;

import com.server.soopool.boardCareer.entity.BoardCareer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
public class Career {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    //enum 컬럼설정
    @Column
    private String careerName;

    @OneToMany(mappedBy = "career")
    private List<BoardCareer> boardCareers = new ArrayList<>();

    public void addBoardCareer(BoardCareer boardCareer) {
        boardCareer.setCareer(this);
        getBoardCareers().add(boardCareer);
    }

}
