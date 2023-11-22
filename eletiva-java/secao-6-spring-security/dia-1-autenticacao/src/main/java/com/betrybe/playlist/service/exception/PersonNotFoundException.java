package com.betrybe.playlist.service.exception;

/** Person not found exception class. */
public class PersonNotFoundException extends NotFoundException {

  /** Person not found exception class. */
  public PersonNotFoundException() {
    super("Pessoa não encontrada!");
  }

}
