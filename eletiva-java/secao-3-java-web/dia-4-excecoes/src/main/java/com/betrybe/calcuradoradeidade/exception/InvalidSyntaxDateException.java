package com.betrybe.calcuradoradeidade.exception;

/**
 * Essa é a exceção para datas com formato inválido.
 */
public class InvalidSyntaxDateException extends RuntimeException {
  public InvalidSyntaxDateException(String message) {
    super(message);
  }
}
