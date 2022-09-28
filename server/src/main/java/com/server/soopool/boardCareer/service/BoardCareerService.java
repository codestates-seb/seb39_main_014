package com.server.soopool.boardCareer.service;

import com.server.soopool.boardCareer.entity.BoardCareer;
import com.server.soopool.boardCareer.repository.BoardCareerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BoardCareerService {
    private final BoardCareerRepository boardCareerRepository;
    public BoardCareer save(BoardCareer boardCareer) {
        return boardCareerRepository.save(boardCareer);
    }

}