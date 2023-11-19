package com.betrybe.report.service.exception;

/** Not found exception class. */
public abstract class NotFoundException extends RuntimeException {
  /** Not found exception method. */
  public NotFoundException(String message) {
    super(message);
  }
}
