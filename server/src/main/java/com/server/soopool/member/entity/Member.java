package com.server.soopool.member.entity;

import com.server.soopool.board.entity.Board;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import lombok.*;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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

    @Column(length = 80, nullable = false)
    private String password;

    @Column(length = 100, nullable = false)
    private String email;

    @Column(length = 10, nullable = false)
    private String nickname;

    @Column
    private LocalDateTime deletedAt;

    @Column(nullable = false)
    private boolean isDeleted;

    @Enumerated(EnumType.STRING)
    private MemberStatus status = MemberStatus.ACTIVE;

    private String roles = "ROLE_USER";

    @Column
    private String provider; // OAuth 제공자에 대한 구분

    @Column
    private String providerId;

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

    private enum MemberStatus{
        ACTIVE("활동중"),
        INACTIVE("비활동중"),
        QUIT("회원탈퇴");

        @Getter
        private String status;

        MemberStatus(String status){
            this.status = status;
        }
    }

//    private enum Role{
//        ROLE_USER("ROLE_USER"),
//        ROLE_ADMIN("ROLE_ADMIN");
//
//        @Getter
//        private final String roles;
//
//        Role(String roles){
//            this.roles = roles;
//        }
//    }

    @Builder(builderMethodName = "oauth2Builder", buildMethodName = "buildOAuth2Member")
    private static Member createOAuth2Member(String name, String email, String provider, String providerId){
        Member member = new Member();
        member.name = name;
        member.email = email;
        member.provider = provider;
        member.providerId = providerId;
        return member;
    }

    @Builder(builderMethodName = "generalBuilder", buildMethodName = "buildGeneralMember")
    public static Member createGeneralMember(String userId, String password, String email, String name, String nickname,LocalDateTime createdAt){
        Member member = new Member();
        member.userId = userId;
        member.password = password;
        member.email = email;
        member.name = name;
        member.nickname = nickname;
        return member;
    }

    public List<String> getRoleList(){ //다른 부분임.

        if(!StringUtils.hasText(roles))
            return List.of();

        return Arrays.stream(this.roles.split(","))
                .collect(Collectors.toList());
    }

    public void saveEncryptedPassword(String encryptedPassword){
        this.password = encryptedPassword;
    }
}
