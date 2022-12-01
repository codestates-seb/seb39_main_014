package com.server.soopool.communication.controller;
import com.server.soopool.communication.dto.CommunicationPatchDto;
import com.server.soopool.communication.dto.CommunicationPostDto;
import com.server.soopool.communication.entity.Communication;
import com.server.soopool.communication.mapper.CommunicationMapper;
import com.server.soopool.communication.service.CommunicationService;
import com.server.soopool.global.dto.MultiResponseDto;
import com.server.soopool.global.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/communication/")
@RequiredArgsConstructor
public class CommunicationController {

    private final CommunicationService communicationService;
    private final CommunicationMapper mapper;

    //자유게시판 글쓰기
    @PostMapping("write")
    public ResponseEntity CommunicationCreate(@RequestBody CommunicationPostDto communicationPostDto){
        Communication communication = communicationService.createCommunication(mapper.PostDtoToEntity(communicationPostDto));
        return new ResponseEntity(new SingleResponseDto<>(mapper.EntityToResponseDto(communication)), HttpStatus.OK);
    }

    //자유게시판 전체 게시판 조회
    @GetMapping
    public ResponseEntity getCommunications(@Positive @RequestParam int page,
                                            @Positive @RequestParam int size){
        Page<Communication> pageCommunications = communicationService.findCommunications(page-1,size);
        List<Communication> communications = pageCommunications.getContent();
        return new ResponseEntity(new MultiResponseDto<>(mapper.EntitysToResponseDtos(communications),pageCommunications), HttpStatus.OK);
    }

    //자유게시판 특정 게시판 조회
    @GetMapping("{communication_id}")
    public ResponseEntity getCommunication(@PathVariable(name = "communication_id") Long communicationId){
        Communication communication = communicationService.findCommunicationById(communicationId);
        communicationService.plusViewCount(communication);
        return new ResponseEntity(new SingleResponseDto<>(mapper.EntityToResponseDto(communication)), HttpStatus.OK);
    }

    //자유게시판 특정 게시글 수정
    @PatchMapping("{communication_id}")
    public ResponseEntity patchCommunication(@PathVariable(name = "communication_id") Long communicationId,
                                             @RequestBody CommunicationPatchDto communicationPatchDto){

        communicationPatchDto.setId(communicationId);
        Communication communication = communicationService.updateCommunication(mapper.PatchDtoToEntity(communicationPatchDto));

        return new ResponseEntity(new SingleResponseDto(mapper.EntityToResponseDto(communication)),HttpStatus.OK);
    }

    //자유게시판 게시글 삭제
    @DeleteMapping("{communication_id}")
    public ResponseEntity deleteCommunication(@PathVariable(name = "communication_id") Long communicationId){
        communicationService.deleteCommunication(communicationId);
        return new ResponseEntity("게시글이 삭제 되었습니다.", HttpStatus.NO_CONTENT);
    }
}
