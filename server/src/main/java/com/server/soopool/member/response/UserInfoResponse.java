package com.server.soopool.member.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class UserInfoResponse<T> {
    private T userInfo;
}
