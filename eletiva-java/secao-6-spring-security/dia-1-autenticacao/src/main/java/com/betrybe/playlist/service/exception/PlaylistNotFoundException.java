package com.betrybe.playlist.service.exception;

/** Playlist not found exception class. */
public class PlaylistNotFoundException extends NotFoundException {

  /** Playlist not found exception class. */
  public PlaylistNotFoundException() {
    super("Playlist não encontrada!");
  }

}
