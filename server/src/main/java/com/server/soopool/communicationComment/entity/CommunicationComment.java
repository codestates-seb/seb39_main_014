package com.server.soopool.communicationComment.entity;

import com.server.soopool.communication.entity.Communication;
import com.server.soopool.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class CommunicationComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ManyToOne 설정
    @ManyToOne(targetEntity = Communication.class)
    @JoinColumn(name = "communication_id")
    private Communication communication;

    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id")
    private Member member;

    // 기본컬럼 설정
    @Column(nullable = false)
    private Long groupNumber;

    @Column(nullable = true) // 대댓글 구현시 false로 변경필요
    private Long groupSeq;

    @Column(nullable = true) // 대댓글 구현시 false로 변경필요
    private boolean groupDepth = true;

    @Column(nullable = false)
    private String content;
}
