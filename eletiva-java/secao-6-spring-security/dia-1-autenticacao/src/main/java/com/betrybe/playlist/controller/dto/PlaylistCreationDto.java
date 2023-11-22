package com.betrybe.playlist.controller.dto;

import com.betrybe.playlist.entity.Playlist;

/** Playlist creation dto record. */
public record PlaylistCreationDto(String name) {

  /** Playlist from dto. */
  public Playlist toEntity() {
    return Playlist.builder().name(name).build();
  }

}
