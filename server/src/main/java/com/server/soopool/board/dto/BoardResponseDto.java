package com.server.soopool.board.dto;

import com.server.soopool.boardCareer.dto.BoardCareerResponseDto;
import com.server.soopool.boardTechstack.dto.BoardTechStackResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class BoardResponseDto {
    private Long id;
    private String nickName;
    private Integer viewCount;
    private String recruitCategory;
    private String period;
    private String recruitMethod;
    private String location;
    private List<BoardTechStackResponseDto> techStackNames;
    private String contact;
    private List<BoardCareerResponseDto> boardCareers;
    private String title;
    private String contents;
    private Integer commentAmount;
    private Integer totalRecruit;
    private Integer bookmarkCount;
    private boolean recruitDone;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private boolean deleted;
    private LocalDateTime deletedAt;
}

