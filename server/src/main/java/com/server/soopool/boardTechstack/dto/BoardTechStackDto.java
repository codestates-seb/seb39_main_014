package com.server.soopool.boardTechstack.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class BoardTechStackDto {
    @Positive
    private long techStackId;
}
