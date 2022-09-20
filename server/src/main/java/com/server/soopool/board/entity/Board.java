package com.server.soopool.board.entity;

import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.location.entity.Location;
import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
public class Board extends BaseTimeEntity {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ManyToOne & OneToOne 관계설정
    @OneToOne(targetEntity = Location.class)
    @JoinColumn(name = "location_id", nullable = false)
    private Location locationId;

    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id", nullable = false)
    private Member memberId;

    // enum 컬럼설정
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RecruitMethod recruitMethod = RecruitMethod.ONLINE;

    @Enumerated(EnumType.STRING)
    @Column(name = "period_name", nullable = false)
    private Period period = Period.NO_CHOICE;

    // 기본컬럼 설정
    @Column
    private String contact;

    @Column(nullable = false)
    private Integer totalRecruit;

    @Column(nullable = false)
    private Integer currentRecruit = 0;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String contents;

    @Column(nullable = false)
    private Integer bookmarkCount = 0;

    @Column
    private LocalDateTime deletedAt;

    @Column(nullable = false)
    private boolean isRecruitDone = false;

    @Column
    private LocalDateTime recruitDoneAt;

    @Column(nullable = false)
    private Integer commentAmount = 0;

    @Column(nullable = false)
    private Integer viewCount = 0;

    // 양방향 연관관계 설정
    @OneToMany(mappedBy = "boardId")
    private List<Bookmark> bookmarks = new ArrayList<>();

    @OneToMany(mappedBy = "boardId", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "boardId")
    private List<BoardCareer> boardCareers = new ArrayList<>();

    @OneToMany(mappedBy = "boardId")
    private List<BoardTechStack> boardTechStacks = new ArrayList<>();

    private enum RecruitMethod{
        ONLINE("온라인"),
        OFFLINE("오프라인");

        private final String method;

        RecruitMethod(String method) {
            this.method = method;
        }

        public String getMethodName() {return method;}
    }
    private enum Period{
        THREE_MONTHS("3개월"),
        SIX_MONTHS("6개월"),
        NINE_MONTHS("9개월"),
        NO_CHOICE("미정");

        private final String month;

        Period(String month) {
            this.month = month;
        }

        public String getMonth() {return month;}
    }
}
