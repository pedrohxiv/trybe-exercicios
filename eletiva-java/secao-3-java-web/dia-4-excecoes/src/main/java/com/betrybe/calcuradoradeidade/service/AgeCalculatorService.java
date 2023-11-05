package com.betrybe.calcuradoradeidade.service;

import com.betrybe.calcuradoradeidade.exception.FutureDateException;
import com.betrybe.calcuradoradeidade.exception.InvalidSyntaxDateException;
import com.betrybe.calcuradoradeidade.exception.NonNumericDateException;
import java.time.LocalDate;
import java.time.Period;
import org.springframework.stereotype.Service;

/**
 * Essa é a service da calculadora de idade.
 */
@Service
public class AgeCalculatorService {
  /**
   * Essa é o método que faz as validações e realiza o calculo de idade.
   *
   * @param date String
   * @return yearsBetween
   */
  public int calculateAge(String date) {
    for (String block : date.split("-")) {
      try {
        Integer.parseInt(block);
      } catch (NumberFormatException e) {
        throw new NonNumericDateException("Date should be in numeric format.");
      }
    }

    if (date.split("-").length != 3
        || date.split("-")[0].length() != 4
        || date.split("-")[1].length() != 2
        || date.split("-")[2].length() != 2) {
      throw new InvalidSyntaxDateException("Invalid date format. Expected aa-mm-dd.");
    }

    int yearsBetween = Period.between(LocalDate.parse(date), LocalDate.now()).getYears();

    if (yearsBetween < 0) {
      throw new FutureDateException("This is a future date.");
    }

    return yearsBetween;
  }

  /**
   * Essa é o método que recebe um valor padrão para a idade e faz as validações e
   * realiza o calculo de idade.
   */
  public int calculateAgeWithDefault(String date, int defaultAge) {
    try {
      return calculateAge(date);
    } catch (FutureDateException | InvalidSyntaxDateException | NonNumericDateException e) {
      return defaultAge;
    }
  }
}
