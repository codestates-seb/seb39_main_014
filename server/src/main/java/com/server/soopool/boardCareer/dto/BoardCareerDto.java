package com.server.soopool.boardCareer.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class BoardCareerDto {
    @Positive
    private long careerId;

    @Positive
    private Integer careerTotalRecruit;
}
