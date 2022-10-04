package com.server.soopool.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MultiResponseCommentDto<T> {
    private Long boardId;
    private T content;
}
