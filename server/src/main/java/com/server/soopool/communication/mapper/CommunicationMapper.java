package com.server.soopool.communication.mapper;

import com.server.soopool.communication.dto.CommunicationPatchDto;
import com.server.soopool.communication.dto.CommunicationPostDto;
import com.server.soopool.communication.dto.CommunicationResponseDto;
import com.server.soopool.communication.entity.Communication;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CommunicationMapper {
    default CommunicationResponseDto EntityToResponseDto(Communication communication) {
        if ( communication == null ) {
            return null;
        }

        CommunicationResponseDto communicationResponseDto = new CommunicationResponseDto();

        if ( communication.getId() != null ) {
            communicationResponseDto.setId( communication.getId().intValue() );
        }
        communicationResponseDto.setTitle( communication.getTitle() );
        communicationResponseDto.setContents( communication.getContents() );
        communicationResponseDto.setViewCount( communication.getViewCount() );
        communicationResponseDto.setBookmarkCount( communication.getBookmarkCount() );
        communicationResponseDto.setCommentAmount( communication.getCommentAmount() );
        communicationResponseDto.setNickname( communication.getMember().getNickname() ); // 직접 추가한 부분임. 자동화가 가능한지 궁금하다.
        communicationResponseDto.setActivityScore( communication.getMember().getActivityScore() ); // 직접 추가한 부분임. 자동화가 가능한지 궁금하다.

        return communicationResponseDto;
    }

    default Communication PostDtoToEntity(CommunicationPostDto communicationPostDto) {
        if ( communicationPostDto == null ) {
            return null;
        }

        Communication communication = new Communication();

        communication.setTitle( communicationPostDto.getTitle() );
        communication.setContents( communicationPostDto.getContents() );

        return communication;
    }

    default Communication PatchDtoToEntity(CommunicationPatchDto communicationPatchDto) {
        if ( communicationPatchDto == null ) {
            return null;
        }

        Communication communication = new Communication();

        communication.setId( communicationPatchDto.getId() );
        communication.setTitle( communicationPatchDto.getTitle() );
        communication.setContents( communicationPatchDto.getContents() );

        return communication;
    }

    default List<CommunicationResponseDto> EntitysToResponseDtos(List<Communication> communications) {
        if ( communications == null ) {
            return null;
        }

        List<CommunicationResponseDto> list = new ArrayList<CommunicationResponseDto>( communications.size() );
        for ( Communication communication : communications ) {
            list.add( EntityToResponseDto( communication ) );
        }

        return list;
    }
}
