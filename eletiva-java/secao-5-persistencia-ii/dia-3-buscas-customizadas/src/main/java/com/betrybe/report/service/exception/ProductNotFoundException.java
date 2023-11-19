package com.betrybe.report.service.exception;

/** Product not found exception class. */
public class ProductNotFoundException extends NotFoundException {
  /** Product not found exception method. */
  public ProductNotFoundException() {
    super("Produto não encontrado!");
  }
}
