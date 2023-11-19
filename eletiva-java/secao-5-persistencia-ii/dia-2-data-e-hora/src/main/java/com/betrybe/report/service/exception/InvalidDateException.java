package com.betrybe.report.service.exception;

/** Invalid date exception class. */
public class InvalidDateException extends CustomError {
  /** Invalid date exception method. */
  public InvalidDateException() {
    super("Data inválida!");
  }
}
