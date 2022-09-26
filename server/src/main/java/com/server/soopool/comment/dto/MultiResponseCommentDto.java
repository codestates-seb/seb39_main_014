package com.server.soopool.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MultiResponseCommentDto<T> {
    private Long boardId;
    private T content;
}
