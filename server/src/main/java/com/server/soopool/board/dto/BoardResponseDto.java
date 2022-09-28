package com.server.soopool.board.dto;

import com.server.soopool.board.entity.Board;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import com.server.soopool.member.entity.Member;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class BoardResponseDto {
    private Long id;
    private String nickName;
    private Integer viewCount;
    private String recruitCategory;
    private String period;
    private String recruitMethod;
    private String location;
    private List<String> techStackNames;
    private String contact;
    private List<String> careerNames;
    private List<Integer> careerTotalRecruit;
    private String title;
    private String contents;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private boolean isDeleted;
    private LocalDateTime deletedAt;
}

