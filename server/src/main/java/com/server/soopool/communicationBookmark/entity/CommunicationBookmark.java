package com.server.soopool.communicationBookmark.entity;

import com.server.soopool.communication.entity.Communication;
import com.server.soopool.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommunicationBookmark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne(targetEntity = Member.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "member_id", nullable = false)
    public Member member;

    @ManyToOne(targetEntity = Communication.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "communication_id", nullable = false)
    public Communication communication;

}
