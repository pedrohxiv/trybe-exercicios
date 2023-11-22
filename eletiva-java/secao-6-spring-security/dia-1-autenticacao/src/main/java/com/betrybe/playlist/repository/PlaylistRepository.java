package com.betrybe.playlist.repository;

import com.betrybe.playlist.entity.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;

/** Playlist repository interface. */
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {

}
