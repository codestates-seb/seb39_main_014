package com.server.soopool.auth.dto;


import com.server.soopool.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SignUpRequestDto {

    @NotNull(message = "아이디를 입력해 주세요.")
    private String userId;

    @NotNull(message = "비밀번호를 입력해 주세요.")
    private String password;

    @NotNull(message = "닉네임을 입력해 주세요.")
    private String nickname;

    @NotNull(message = "이름을 입력해 주세요.")
    private String name;

    @NotNull(message = "이메일을 입력해 주세요.")
    private String email;

    public Member toMember(){
        return Member.generalBuilder()
                .userId(userId)
                .password(password)
                .name(name)
                .nickname(nickname)
                .email(email)
                .buildGeneralMember();
    }

}
