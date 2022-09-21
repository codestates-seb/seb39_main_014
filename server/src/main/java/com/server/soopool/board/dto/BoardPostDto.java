package com.server.soopool.board.dto;

import com.server.soopool.board.entity.Board;
import com.server.soopool.boardTechstack.entity.BoardTechStack;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;


@Getter
public class BoardPostDto {
    @NotBlank(message = "모집 구분을 선택해주세요.")
    private String recruitCategory;

    @NotBlank(message = "온라인 오프라인 여부를 선택해주세요.")
    private String recruitMethod;

    @NotBlank(message = "지역을 선택해주세요.")
    private String location;

    @NotBlank(message = "사용 기술을 선택해주세요.")
    private List<BoardTechStack> boardTechStacks;

    private String period;

    @NotBlank(message = "모집분류를 선택해주세요.")
    private List<String> careerList;

    private String contact;

    @NotBlank(message = "제목을 입력해주세요.")
    private String title;

    @NotBlank(message = "내용을 입력해주세요.")
    private String contents;

}
