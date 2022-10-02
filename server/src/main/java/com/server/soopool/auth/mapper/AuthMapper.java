package com.server.soopool.auth.mapper;


import com.server.soopool.auth.dto.MemberResponseDto;
import com.server.soopool.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AuthMapper {
    MemberResponseDto memberToMemberResponseDto(Member member);
}
