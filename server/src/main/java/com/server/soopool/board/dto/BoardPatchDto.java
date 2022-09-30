package com.server.soopool.board.dto;

import com.server.soopool.board.entity.Board;
import com.server.soopool.boardCareer.dto.BoardCareerDto;
import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardTechstack.dto.BoardTechStackDto;
import com.server.soopool.boardTechstack.entity.BoardTechStack;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Optional;


@Getter
public class BoardPatchDto {

    private long boardId;

    @NotBlank(message = "온라인 오프라인 여부를 선택해주세요.")
    private Board.RecruitMethod recruitMethod;

    @NotBlank(message = "지역을 선택해주세요.")
    private Board.Location location;

    @NotBlank(message = "사용 기술을 선택해주세요.")
    private List<BoardTechStackDto> boardTechStacks;

    private Board.Period period;

    @NotBlank(message = "모집 인원수를 선택해주세요.")
    private List<BoardCareerDto> boardCareers;

    private String contact;

    @NotBlank(message = "제목을 입력해주세요.")
    private String title;

    @NotBlank(message = "내용을 입력해주세요.")
    private String contents;

    public void setBoardId(long boardId) {
        this.boardId = boardId;
    }

}
