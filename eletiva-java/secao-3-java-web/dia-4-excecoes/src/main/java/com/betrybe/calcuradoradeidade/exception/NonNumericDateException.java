package com.betrybe.calcuradoradeidade.exception;

/**
 * Essa é a exceção para datas não numéricas.
 */
public class NonNumericDateException extends RuntimeException {
  public NonNumericDateException(String message) {
    super(message);
  }
}
