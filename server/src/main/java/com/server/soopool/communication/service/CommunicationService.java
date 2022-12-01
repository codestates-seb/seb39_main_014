package com.server.soopool.communication.service;

import com.server.soopool.auth.PrincipalDetails;
import com.server.soopool.communication.entity.Communication;
import com.server.soopool.communication.repository.CommunicationRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.member.entity.Member;
import com.server.soopool.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommunicationService {

    private final CommunicationRepository communicationRepository;
    private final MemberService memberService;

    public Communication createCommunication(Communication communication) {

        verifyLoginStatus();

        //로그인된 유저 객체로부터 이름을 불러와서 Communication 객체에 저장.
        PrincipalDetails loginUser = (PrincipalDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Member member = memberService.findByUserId(loginUser.getMember().getUserId());
        communication.setMember(member);

        return communicationRepository.save(communication);
    }

    @Transactional(readOnly = true)
    public Communication findCommunicationById(Long communicationId){
        return communicationRepository.findById(communicationId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMUNICATION_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public Page<Communication> findCommunications(int page, int size){
        return communicationRepository.findAll(PageRequest.of(page,size, Sort.by("Id")));
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Communication updateCommunication(Communication communication){

        verifyLoginStatus();

        Communication findCommunication = findCommunicationById(communication.getId());

        verifyEqualUser(findCommunication);

        Optional.ofNullable(findCommunication.getTitle())
                .ifPresent(title -> findCommunication.setTitle(title));

        Optional.ofNullable(findCommunication.getContents())
                .ifPresent(contents -> findCommunication.setContents(contents));

        return communicationRepository.save(findCommunication);
    }

    public void deleteCommunication(Long communicationId){
        verifyLoginStatus();
        Communication communication = findCommunicationById(communicationId);
        verifyEqualUser(communication);
        communicationRepository.delete(communication);
    }


    //UTILITY
    public void plusViewCount(Communication communication) {
        communication.setViewCount(communication.getViewCount() + 1);
        communicationRepository.save(communication);
    }


    //EXCEPTION HANDLE

    //익명 유저가 로그인시 예외처리
    public void verifyLoginStatus(){
        if (SecurityContextHolder.getContext().getAuthentication().getPrincipal() == "anonymousUser")
            throw new BusinessLogicException(ExceptionCode.NEEDED_LOGIN);
    }

    //로그인 한 유저와 글을 쓴 유저가 다를시 예외처리
    public void verifyEqualUser(Communication communication){
        PrincipalDetails principal = (PrincipalDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if(!principal.getMember().getUserId() // 현재 로그인한 유저아이디와 게시글을 작성한 유저 아이디가 같은지 비교
                .equals(communication.getMember().getUserId())){
            throw new BusinessLogicException(ExceptionCode.CAN_NOT_MODIFY_COMMUNICATION);
        }
    }
}
