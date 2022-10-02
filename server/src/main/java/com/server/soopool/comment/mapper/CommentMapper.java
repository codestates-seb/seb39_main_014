package com.server.soopool.comment.mapper;

import com.server.soopool.board.entity.Board;
import com.server.soopool.comment.dto.CommentResponseDto;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.member.entity.Member;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@AllArgsConstructor
public class CommentMapper {

    public List<CommentResponseDto> commentToCommentResponse(List<Comment> comments) {

        List<CommentResponseDto> list = new ArrayList<>();
        for(Comment comment : comments) {
            list.add(commentToCommentResponse(comment));
        }
        return list;
    }

    public CommentResponseDto commentToCommentResponse(Comment comment) {
        CommentResponseDto.CommentResponseDtoBuilder commentResponseDto = CommentResponseDto.builder();
        commentResponseDto.nickname(comment.getMember().getNickname());
        commentResponseDto.content(comment.getContent());
        commentResponseDto.groupNumber(comment.getGroupNumber());
        commentResponseDto.groupSeq(comment.getGroupSeq());
        commentResponseDto.groupDepth(comment.isGroupDepth());
        commentResponseDto.createdAt(comment.getCreatedAt());
        commentResponseDto.modifiedAt(comment.getModifiedAt());

        return commentResponseDto.build();
    }
}
