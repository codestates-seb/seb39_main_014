package com.server.soopool.member.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
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

    public void add(CareerMember careerMember) {
        careerMember.setMemberId(this);
        getCareerMembers().add(careerMember);
    }

    @OneToMany(mappedBy = "memberId")
    private List<MemberTechStack> memberTechStacks;

    public void add(MemberTechStack memberTechStack) {
        memberTechStack.setMemberId(this);
        getMemberTechStacks().add(memberTechStack);
    }

    // 북마크 테이블과는 memberId가 아닌 userId와 mapping 되어있음.
    @OneToMany(mappedBy = "memberId")
    private List<Bookmark> bookmarks;
    public void add(Bookmark bookmark) {
        bookmark.setMemberId(this);
        getBookmarks().add(bookmark);
    }

    @OneToMany(mappedBy = "memberId")
    private List<Board> boards;
    public void add(Board board) {
        board.setMemberId(this);
        getBoards().add(board);
    }

    @OneToMany(mappedBy = "memberId")
    private List<Comment> comments;

    public void add(Comment comment) {
        comment.setMemberId(this);
        getComments().add(comment);
    }
}
