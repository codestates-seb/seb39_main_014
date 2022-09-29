package com.server.soopool.global.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> boards;

    private PageInfo pageInfo;

    public MultiResponseDto(List<T> boards, Page page) {
        this.boards = boards;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}
