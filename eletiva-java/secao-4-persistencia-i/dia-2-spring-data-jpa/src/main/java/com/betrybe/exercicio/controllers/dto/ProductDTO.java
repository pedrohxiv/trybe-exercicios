package com.betrybe.exercicio.controllers.dto;

import com.betrybe.exercicio.models.entities.Product;

public record ProductDTO(Long id, String name, Double price) {
  public Product toProduct() {
    return new Product(id, name, price);
  }
}
