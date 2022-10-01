package com.server.soopool.member.response;

import com.server.soopool.career.request.UserInfoCareerRequest;
import com.server.soopool.techstack.request.UserInfoTechStackRequest;
import lombok.Getter;

import java.util.List;

@Getter
public class UserInfo {
    private String nickname;
    private Integer activeScore = 0;
    private List<UserInfoCareerRequest> career; //초기 파일의 이름을 잘못정했습니다. 리펙토링이 필요합니다.
    private List<UserInfoTechStackRequest> techStack; //초기 파일의 이름을 잘못정했습니다. 리펙토링이 필요합니다.
}
