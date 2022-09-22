package com.server.soopool.member.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
public class Member extends BaseTimeEntity {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //기본컬럼 설정
    @Column(length = 60, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private String userId;

    @Column(length = 20, nullable = false)
    private String password;

    @Column(length = 100, nullable = false)
    private String email;

    @Column(length = 10, nullable = false)
    private String nickname;

    @Column
    private LocalDateTime deletedAt;

    @Column(nullable = false)
    private boolean isDeleted;

    //OneToMany 컬럼설정
    @OneToMany(mappedBy = "memberId")
    private List<CareerMember> careerMembers;

    @OneToMany(mappedBy = "memberId")
    private List<MemberTechStack> memberTechStacks;

    // 북마크 테이블과는 memberId가 아닌 userId와 mapping 되어있음.
    @OneToMany(mappedBy = "memberId")
    private List<Bookmark> bookmarks;

    @OneToMany(mappedBy = "memberId")
    private List<Board> boards;

    @OneToMany(mappedBy = "memberId")
    private List<Comment> comments;
}
