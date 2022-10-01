package com.server.soopool.techstack.entity;

import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class TechStack {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //기본컬럼 설정
    @Column
    private String techStackName;

    @Column
    private String imageURI;

    @OneToMany(mappedBy = "techStack")
    private List<BoardTechStack> boardTechStacks = new ArrayList<>();

    public void addBoardTechStack(BoardTechStack boardTechStack) {
        boardTechStack.setTechStack(this);
        getBoardTechStacks().add(boardTechStack);
    }
}
