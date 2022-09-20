package com.server.soopool.bookmark.repository;

import com.server.soopool.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookMarkRepository extends JpaRepository<Bookmark, Long> {
}
