package com.server.soopool.careerMember.service;

import com.server.soopool.career.entity.Career;
import com.server.soopool.career.repository.CareerRepository;
import com.server.soopool.career.request.UserInfoCareerRequest;
import com.server.soopool.career.service.CareerService;
import com.server.soopool.careerMember.entity.CareerMember;
import com.server.soopool.careerMember.repository.CareerMemberRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CareerMemberService {
    private final CareerMemberRepository careerMemberRepository;
    private final CareerRepository careerRepository;
    private final CareerService careerService;

    public Optional<CareerMember> getCareerMember(Long memberId) {
        return careerMemberRepository.findByMemberId(memberId);
    }

    public void setCareerMember(Member member,
                                Optional<CareerMember> careerMember,
                                List<UserInfoCareerRequest> userInfoCareerRequests) {
        if(careerMember.isPresent()) {
            updateCareerMember(careerMember, userInfoCareerRequests);
        } else {
            insertCareerMember(member, userInfoCareerRequests);
        }
    }

    public void insertCareerMember(Member member, List<UserInfoCareerRequest> userInfoCareerRequests) {
        for(UserInfoCareerRequest e : userInfoCareerRequests) {
            String name = e.getName();
            String level = e.getLevel();

            CareerMember careerMember = new CareerMember();
            careerMember.setMember(member);
            careerMember.setCareer(careerService.findCareer(name));
            if(CareerMember.CareerLevelName.BEGINNER.toString().equals(level)) {
                careerMember.setCareerLevelName(CareerMember.CareerLevelName.BEGINNER);
            } else if(CareerMember.CareerLevelName.INTERMEDIATE.toString().equals(level)) {
                careerMember.setCareerLevelName(CareerMember.CareerLevelName.INTERMEDIATE);
            } else {
                careerMember.setCareerLevelName(CareerMember.CareerLevelName.MASTER);
            }

            careerMemberRepository.save(careerMember);
        }
    }

    public void updateCareerMember(Optional<CareerMember> careerMember, List<UserInfoCareerRequest> userInfoCareerRequests) {
        Member member = careerMember.get().getMember();

        for(UserInfoCareerRequest e : userInfoCareerRequests){
            String name = e.getName();
            String level = e.getLevel(); // INTERMEDIATE

            CareerMember.CareerLevelName enumValue = Enum.valueOf(CareerMember.CareerLevelName.class, level);
            Optional<Career> career = careerRepository.findByCareerName(name);

            careerMemberRepository.updateCareerId(enumValue, career.get(), member, career.get());
        }
    }
}
