package com.betrybe.exercicio.controllers.dto;

import com.betrybe.exercicio.models.entities.Category;

public record CategoryDTO(Long id, String name) {
  public Category toCategory() {
    return new Category(id, name);
  }
}
