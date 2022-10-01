package com.server.soopool.member.dto;

import com.server.soopool.career.request.UserInfoCareerRequest;
import com.server.soopool.techstack.request.UserInfoTechStackRequest;
import lombok.Getter;

import java.util.List;

@Getter
public class UserInfoDto {
    private String nickname;
    private Integer activeScore = 0; // default 0으로 정의
    private List<UserInfoCareerRequest> career;
    private List<UserInfoTechStackRequest> techStack;
}


/*
        {
            "nickname" : "희희",
            "activeScore" : 0,
            "career" : [
                "name" : "웹 백엔드",
                "level" : "중수"
            ],
            "techStack" : [
                {
                    "name" : "자바"
                },
                {
                    "name" : "웹 프론트엔드
        }
    ]
}


 */