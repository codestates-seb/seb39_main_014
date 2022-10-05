package com.server.soopool.boardCareer.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class BoardCareerResponseDto {
    private String careerName;
    private Integer careerCurrentRecruit;
    private Integer careerTotalRecruit;
}
