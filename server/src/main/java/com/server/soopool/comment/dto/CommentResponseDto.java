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
    private Long groupNumber;
    private Long groupSeq;
    private boolean groupDepth;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
