package com.server.soopool.auth.dto;

import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberResponseDto {
    private String userId;
    private String email;
    private String name;
    private String nickname;
}
