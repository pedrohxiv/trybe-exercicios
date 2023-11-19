package com.betrybe.report.service.exception;

/** Custom error class. */
public class CustomError extends RuntimeException {
  /** Custom error method. */
  public CustomError(String message) {
    super(message);
  }
}
