package com.server.soopool.memberTechstack.service;

import com.server.soopool.member.entity.Member;
import com.server.soopool.memberTechstack.entity.MemberTechStack;
import com.server.soopool.memberTechstack.repository.MemberTechStackRepository;
import com.server.soopool.techstack.request.UserInfoTechStackRequest;
import com.server.soopool.techstack.service.TechStackService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberTechstackService {

    private final MemberTechStackRepository memberTechStackRepository;
    private final TechStackService techStackService;

    public Optional<MemberTechStack> getMemberTechStack(Member member){
        List<Optional<MemberTechStack>> list = memberTechStackRepository.findByMemberId(member);

        if(list.size() == 0) return Optional.empty();

        Optional<MemberTechStack> result = list.get(0);
        return result;
    }

    public void insertMemberTechStack(Member member,
                                      List<UserInfoTechStackRequest> userInfoTechStackRequests) {
        for(UserInfoTechStackRequest e : userInfoTechStackRequests) {
            String name = e.getName();

            MemberTechStack memberTechStack = new MemberTechStack();
            memberTechStack.setMember(member);
            memberTechStack.setTechStack(techStackService.findTechStack(name));

            memberTechStackRepository.save(memberTechStack);
        }
    }

    public void deleteMemberTechStack(Member member) {
        memberTechStackRepository.deleteAllByMemberId(member.getId());
    }

    public void setMemberTechStack(Member member,
                                   Optional<MemberTechStack> memberTechStack,
                                   List<UserInfoTechStackRequest> userInfoTechStackRequests) {


            if (memberTechStack.isPresent()) {
                deleteMemberTechStack(member);
            }

            insertMemberTechStack(member, userInfoTechStackRequests);
    }
}
