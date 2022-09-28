package com.server.soopool.board.entity;

import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.bookmark.entity.Bookmark;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.global.baseTime.BaseTimeEntity;
import com.server.soopool.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Board extends BaseTimeEntity {
    //Todo : 컬럼의 제약조건 & 레이지 로딩 설정하기

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = Member.class)
    // 로그인 구현 후 nullable = false 처리 해야 함.
    @JoinColumn(name = "member_id")
    private Member memberId;

    // 모집글 분류 추가
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RecruitCategory recruitCategory = RecruitCategory.STUDY;

    // enum 컬럼설정
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RecruitMethod recruitMethod = RecruitMethod.ONLINE;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Location location = Location.NO_CHOICE;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Period period = Period.NO_CHOICE;

    // 기본컬럼 설정
    @Column
    private String contact;

    @Column(nullable = false)
    private Integer totalRecruit = 0;

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
    @OneToMany(mappedBy = "boardId", cascade = CascadeType.ALL)
    private List<Bookmark> bookmarks = new ArrayList<>();

    public void add(Bookmark bookmark) {
        bookmark.setBoardId(this);
        getBookmarks().add(bookmark);
    }

    @OneToMany(mappedBy = "boardId", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    public void add(Comment comment) {
        comment.setBoardId(this);
        getComments().add(comment);
    }

    @OneToMany(mappedBy = "boardId", cascade = CascadeType.ALL)
    private List<BoardCareer> boardCareers = new ArrayList<>();

    public void add(BoardCareer boardCareer) {
        boardCareer.setBoardId(this);
        getBoardCareers().add(boardCareer);
    }

    @OneToMany(mappedBy = "boardId", cascade = CascadeType.ALL)
    private List<BoardTechStack> boardTechStacks = new ArrayList<>();

    public void add(BoardTechStack boardTechStack) {
        boardTechStack.setBoardId(this);
        getBoardTechStacks().add(boardTechStack);
    }
    @Getter
    public enum RecruitCategory{
        STUDY("스터디"),
        PROJECT("프로젝트");

        @Getter
        private final String category;

        RecruitCategory(String category) {
            this.category = category;
        }

        public String getCategory(){
            return category;
        }
    }

    public enum RecruitMethod{
        ONLINE("온라인"),
        OFFLINE("오프라인");

        private final String method;

        RecruitMethod(String method) {
            this.method = method;
        }

        public String getMethodName() {return method;}
    }
    public enum Period {
        ONE_MONTH("1개월"),
        TWO_MONTH("2개월"),
        THREE_MONTH("3개월"),
        FOUR_MONTH("4개월"),
        FIVE_MONTH("5개월"),
        SIX_MONTH("6개월"),
        LONG_TERM("장기"),
        NO_CHOICE("미정");

        private final String month;

        Period(String month) {
            this.month = month;
        }

        public String getMonth() {return month;}
    }

    public enum Location{
        SEOUL("서울"),
        INCHEON("인천"),
        GYEONGGI("경기"),
        GANGWON("강원"),
        GYEONGSANG("경상"),
        JEOLLA("전라"),
        CHUNGCHEONG("충청"),
        JEJU("제주"),
        NO_CHOICE("미정");

        private final String locationName;

        Location(String locationName) {
            this.locationName = locationName;
        }

        public String getLocationName() {return locationName;}
    }
}
