package com.server.soopool.board.dto;

import com.server.soopool.board.entity.Board;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class BoardResponseDto {
    private Long id;
    private Integer viewCount;
    private String recruitCategory;
    private String period;
    private String recruitMethod;
    private String location;
    private List<String> techStackName;
    private String contact;
    private List<String> careerList;
    private String title;
    private String contents;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private boolean isDeleted;
    private LocalDateTime deletedAt;
}

