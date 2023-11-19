package com.betrybe.report.controller.dto;

import com.betrybe.report.entity.Product;
import java.time.LocalDate;

/** Product creation DTO record. */
public record ProductCreationDto(String name, LocalDate manufactureDate, LocalDate expirationDate) {
  /** Product to entity method. */
  public Product toEntity() {
    Product product = new Product();
    product.setName(name);
    product.setManufactureDate(manufactureDate);
    product.setExpirationDate(expirationDate);
    return product;
  }
}
