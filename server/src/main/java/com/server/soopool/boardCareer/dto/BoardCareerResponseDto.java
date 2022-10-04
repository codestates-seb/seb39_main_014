package com.server.soopool.boardCareer.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class BoardCareerResponseDto {
    private String careerName;
    private Integer careerTotalRecruit;
}
