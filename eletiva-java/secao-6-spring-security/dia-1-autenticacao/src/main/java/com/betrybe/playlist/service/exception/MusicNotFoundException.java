package com.betrybe.playlist.service.exception;

/** Music not found exception class. */
public class MusicNotFoundException extends NotFoundException {

  /** Music not found exception method. */
  public MusicNotFoundException() {
    super("Música não encontrada!");
  }

}
