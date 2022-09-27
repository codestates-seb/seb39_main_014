package com.server.soopool.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class CommentResponseDto {
    private String nickname;
    private String content;
    private Integer groupNumber;
    private Integer groupSeq;
    private boolean groupDepth;
    private LocalDateTime createdAt;
    private LocalDateTime modifyedAt;
}
