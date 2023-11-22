package com.betrybe.playlist.controller.advice;

import com.betrybe.playlist.service.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/** General controller advice class. */
@ControllerAdvice
public class GeneralControllerAdvice {

  /** Handle not found method. */
  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<String> handleNotFound(RuntimeException e) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
  }

}
