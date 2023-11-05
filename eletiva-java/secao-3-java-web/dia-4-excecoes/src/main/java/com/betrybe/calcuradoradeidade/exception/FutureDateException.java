package com.betrybe.calcuradoradeidade.exception;

/**
 * Essa é a exceção para datas futuras.
 */
public class FutureDateException extends RuntimeException {
  public FutureDateException(String message) {
    super(message);
  }
}
