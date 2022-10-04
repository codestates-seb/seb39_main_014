package com.server.soopool.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
public class CommentPatchDto {
    private Long groupNumber;

    @NotBlank
    @Size(min=1, max=35, message = "댓글은 1자이상 35자 이하여야합니다.")
    private String content;
}
