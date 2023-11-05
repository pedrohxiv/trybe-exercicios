package com.betrybe.calcuradoradeidade.controller;

import com.betrybe.calcuradoradeidade.dto.DateDto;
import com.betrybe.calcuradoradeidade.dto.ErrorMessageDto;
import com.betrybe.calcuradoradeidade.exception.FutureDateException;
import com.betrybe.calcuradoradeidade.exception.InvalidSyntaxDateException;
import com.betrybe.calcuradoradeidade.exception.NonNumericDateException;
import com.betrybe.calcuradoradeidade.service.AgeCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Essa é a controller da calculadora de idade.
 */
@RestController
@RequestMapping("/calculateAge")
public class AgeCalculatorController implements AgeCalculatorControllerInterface {
  AgeCalculatorService service;

  @Autowired
  public AgeCalculatorController(AgeCalculatorService service) {
    this.service = service;
  }

  @GetMapping
  @Override
  public ResponseEntity<DateDto> calculateAge(String date, String orDefaultAge) {
    if (orDefaultAge == null) {
      int age = service.calculateAge(date);
      return ResponseEntity.ok(new DateDto(age));
    } else {
      int age = service.calculateAgeWithDefault(date, Integer.parseInt(orDefaultAge));
      return ResponseEntity.ok(new DateDto(age));
    }
  }

  @ExceptionHandler({ FutureDateException.class })
  public ResponseEntity<ErrorMessageDto> handlerUnprocessableEntity(RuntimeException exception) {
    return ResponseEntity.unprocessableEntity().body(new ErrorMessageDto(exception.getMessage()));
  }

  @ExceptionHandler({ InvalidSyntaxDateException.class, NonNumericDateException.class })
  public ResponseEntity<ErrorMessageDto> handlerBadRequest(RuntimeException exception) {
    return ResponseEntity.badRequest().body(new ErrorMessageDto(exception.getMessage()));
  }
}