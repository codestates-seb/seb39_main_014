package com.server.soopool.boardTechstack.service;

import com.server.soopool.boardTechstack.repository.BoardTechStackRepository;
import com.server.soopool.techstack.entity.TechStack;
import com.server.soopool.techstack.repository.TechStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class BoardTechStackService {
    private final BoardTechStackRepository boardTechStackRepository;
    private final TechStackRepository techStackRepository;

    @Transactional
    public void deleteBoardTechStacks(long boardId) {
        boardTechStackRepository.deleteAllByBoardId(boardId);
    }

    public List<Map.Entry<String, Integer>> findPopularTechStack() {
        Map<String, Integer> map = new HashMap<>();
        for(long i = 1; i <= techStackRepository.findAll().size(); i++) {
            TechStack techStack = techStackRepository.findById(i).orElseThrow();
            map.put(techStack.getTechStackName(), boardTechStackRepository.findByTechStackId(i).size());
        }
        List<Map.Entry<String, Integer>> techStackUsingCounts = new LinkedList<>(map.entrySet());
        techStackUsingCounts.sort(Collections.reverseOrder(Map.Entry.comparingByValue()));
        return techStackUsingCounts;
    }
}