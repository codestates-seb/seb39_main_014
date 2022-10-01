package com.server.soopool.career.service;

import com.server.soopool.career.entity.Career;
import com.server.soopool.career.repository.CareerRepository;
import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CareerService {

    private final CareerRepository careerRepository;

    @Transactional(readOnly = true)
    public Career findCareer(long careerId) {
        Career career = careerRepository.findById(careerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.CAREER_NOT_FOUND));
        return career;
    }

    public Career findCareer(String careerName){
        Career career =  careerRepository.findByCareerName(careerName)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.CAREER_NOT_FOUND));
    return career;
    }
}
