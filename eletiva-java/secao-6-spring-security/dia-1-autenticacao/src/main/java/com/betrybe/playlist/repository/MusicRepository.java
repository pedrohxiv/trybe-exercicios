package com.betrybe.playlist.repository;

import com.betrybe.playlist.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;

/** Music repository interface. */
public interface MusicRepository extends JpaRepository<Music, Long> {

}
