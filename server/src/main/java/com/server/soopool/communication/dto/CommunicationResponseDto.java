package com.server.soopool.communication.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CommunicationResponseDto {
    private Integer id;
    private String nickname;
    private Integer activityScore;
    private String title;
    private String contents;
    private Integer viewCount;
    private Integer bookmarkCount;
    private Integer commentAmount;
    // private CommunicationComment communicationComment;
    // private CommunicationBookmark communicationBookmark;
    // 기능 추가시 넣고 테스트 할것.
}
