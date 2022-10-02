package com.server.soopool.boardApply.entity;

import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class BoardApply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = BoardCareer.class)
    @JoinColumn(name = "board_career_id")
    private BoardCareer boardCareer;

    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    private Member member;

    public void addBoardCareer(BoardCareer boardCareer) {
        this.boardCareer = boardCareer;
        if(!this.boardCareer.getBoardApplies().contains(this)) {
            this.boardCareer.addBoardApply(this);
        }
    }

    public void addMember(Member member) {
        this.member = member;
        if(!this.member.getBoardApplies().contains(this)) {
            this.member.addBoardApply(this);
        }
    }


}
