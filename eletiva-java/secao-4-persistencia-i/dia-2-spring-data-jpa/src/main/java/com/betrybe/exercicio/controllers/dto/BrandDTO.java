package com.betrybe.exercicio.controllers.dto;

import com.betrybe.exercicio.models.entities.Brand;

public record BrandDTO(Long id, String name) {
  public Brand toBrand() {
    return new Brand(id, name);
  }
}
