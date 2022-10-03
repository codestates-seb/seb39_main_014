package com.server.soopool.comment.service;

import com.server.soopool.board.entity.Board;
import com.server.soopool.board.repository.BoardRepository;
import com.server.soopool.comment.dto.CommentDeleteDto;
import com.server.soopool.comment.dto.CommentPatchDto;
import com.server.soopool.comment.entity.Comment;
import com.server.soopool.comment.repository.BoardIdAndGroupNumberMapping;
import com.server.soopool.comment.repository.CommentRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    // 댓글 가져오기
    public List<Comment> getComments(Board board){
        List<Comment> comments = commentRepository.getComments(board);
        return comments;
    }

    // 댓글 작성
    public Comment createComment(Long memberId, Long boardId, String content) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)); // 사용자 정의 Exception 설정 필요
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND)); // 사용자 정의 Exception 설정 필요
        Comment comment = Comment.builder()
                .member(member)
                .board(board)
                .content(content)
                .groupNumber(createGroupNumber(boardId))
                .build();

        commentRepository.save(comment);

        return comment;
    }

    // 댓글 수정

//    public Comment modifyComment(Long memberId, Long boardId, CommentPatchDto commentPatchDto) {
//        Member member = memberRepository.findById(memberId)
//                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)); // 사용자 정의 Exception 설정 필요
//        Board board = boardRepository.findById(boardId)
//                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND)); // 사용자 정의 Exception 설정 필요
//
//        commentRepository.updateComment(commentPatchDto.getContent(), board, member, commentPatchDto.getGroupNumber());
//        Comment comment = commentRepository.getCommentMatchingMemberIdAndBoardIdAAndGroupNumber(board, member, commentPatchDto.getGroupNumber());
//
//        return comment;
//    }

    // 댓글 삭제
//    public void deleteComment(Long memberId, Long boardId, CommentDeleteDto commentDeleteDto) {
//        Member member = memberRepository.findById(memberId)
//                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)); // 사용자 정의 Exception 설정 필요
//        Board board = boardRepository.findById(boardId)
//                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND)); // 사용자 정의 Exception 설정 필요
//        commentRepository.deleteComment(board, member, commentDeleteDto.getGroupNumber());
//    }

    // 댓글의 GroupNumber 정의
    public Long createGroupNumber(Long boardId) {
        // NonUniqueResultException :: https://programmer7895.tistory.com/18
        List<BoardIdAndGroupNumberMapping> search = BoardIdAndGroupNumberMapping(boardId);

        // stream으로 코드 작성 고민할 부분
        if(search.size() == 0) {
            return 1L;
        } else {
            return search.get(search.size() - 1).getGroupNumber() + 1;
        }
    }

    public List BoardIdAndGroupNumberMapping(Long boardId) {
        List<BoardIdAndGroupNumberMapping> search = commentRepository.findByBoardId(boardId);
        return search;
    }
}
