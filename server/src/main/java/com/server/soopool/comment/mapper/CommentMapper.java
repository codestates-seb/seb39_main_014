package com.server.soopool.comment.mapper;

import com.server.soopool.board.dto.BoardResponseDto;
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

    public List<CommentResponseDto> commentToCommentResponse(List<Comment> comments, Member member, Board board) {
        CommentResponseDto.CommentResponseDtoBuilder commentResponseDto = CommentResponseDto.builder();
//        commentResponseDto.boardId(board.getId());

        List<CommentResponseDto> list = new ArrayList<>();
        for(Comment comment : comments) {
            list.add(commentToCommentResponse(comment, member));
        }

        return list;
    }

    public CommentResponseDto commentToCommentResponse(Comment comment, Member member) {
        CommentResponseDto.CommentResponseDtoBuilder commentResponseDto = CommentResponseDto.builder();
        commentResponseDto.nickname(member.getNickname());
        commentResponseDto.content(comment.getContent());
        commentResponseDto.groupNumber(comment.getGroupNumber());
        commentResponseDto.groupSeq(comment.getGroupSeq());
        commentResponseDto.groupDepth(comment.isGroupDepth());
        commentResponseDto.createdAt(comment.getCreatedAt());
        commentResponseDto.modifyedAt(comment.getModifiedAt());

        return commentResponseDto.build();
    }
}
