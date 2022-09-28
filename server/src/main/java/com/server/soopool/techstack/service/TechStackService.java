package com.server.soopool.techstack.service;

import com.server.soopool.global.exception.BusinessLogicException;
import com.server.soopool.global.exception.ExceptionCode;
import com.server.soopool.techstack.entity.TechStack;
import com.server.soopool.techstack.repository.TechStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TechStackService {

    private final TechStackRepository techStackRepository;

    @Transactional(readOnly = true)
    public TechStack findTechStack(long techStackId) {
        TechStack techStack = techStackRepository.findById(techStackId)
                .orElseThrow(()-> new BusinessLogicException(ExceptionCode.TECHSTACK_NOT_FOUND));
        return techStack;
    }
}
