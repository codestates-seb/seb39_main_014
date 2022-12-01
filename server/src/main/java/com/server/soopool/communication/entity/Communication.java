package com.server.soopool.communication.entity;

import com.server.soopool.communicationBookmark.entity.CommunicationBookmark;
import com.server.soopool.communicationComment.entity.CommunicationComment;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Communication extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member")
    private Member member;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private Integer bookmarkCount = 0;

    @Column(nullable = false)
    private Integer commentAmount = 0;

    @Column(nullable = false)
    private Integer viewCount = 0;


    @OneToMany(mappedBy = "communication", cascade = CascadeType.ALL)
    private List<CommunicationBookmark> communicationBookmarks = new ArrayList<>();

    public void add(CommunicationBookmark communicationBookmark) {
        communicationBookmark.setCommunication(this);
        getCommunicationBookmarks().add(communicationBookmark);
    }

    @OneToMany(mappedBy = "communication", cascade = CascadeType.ALL)
    private List<CommunicationComment> communicationComments = new ArrayList<>();

    public void add(CommunicationComment communicationComment) {
        communicationComment.setCommunication(this);
        getCommunicationComments().add(communicationComment);
    }
}
