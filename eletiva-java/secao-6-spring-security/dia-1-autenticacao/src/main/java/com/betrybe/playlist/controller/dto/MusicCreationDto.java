package com.betrybe.playlist.controller.dto;

import com.betrybe.playlist.entity.Music;

/** Music creation dto record. */
public record MusicCreationDto(String musicName, String singer) {

  /** Music from dto. */
  public Music toEntity() {
    Music music = new Music();
    music.setMusicName(musicName);
    music.setSinger(singer);
    return music;
  }

}
