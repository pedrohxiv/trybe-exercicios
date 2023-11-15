package com.betrybe.exercicio.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.betrybe.exercicio.controllers.dto.CategoryDTO;
import com.betrybe.exercicio.controllers.dto.ResponseDTO;
import com.betrybe.exercicio.models.entities.Category;
import com.betrybe.exercicio.services.CategoryService;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {
  private final CategoryService categoryService;

  @Autowired
  public CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

  @PostMapping()
  public ResponseEntity<ResponseDTO<Category>> createCategory(@RequestBody CategoryDTO categoryDTO) {
    Category newCategory = categoryService.insertCategory(categoryDTO.toCategory());

    ResponseDTO<Category> responseDTO = new ResponseDTO<Category>("Categoria criada com sucesso!", newCategory);

    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @GetMapping()
  public List<CategoryDTO> getAllCategories() {
    List<Category> allCategories = categoryService.getAllCategories();

    return allCategories.stream()
        .map(category -> new CategoryDTO(category.getId(), category.getName()))
        .collect(Collectors.toList());
  }

  @GetMapping("/{categoryId}")
  public ResponseEntity<ResponseDTO<Category>> getCategoryById(@PathVariable Long categoryId) {
    Optional<Category> optionalCategory = categoryService.getCategoryById(categoryId);

    if (optionalCategory.isEmpty()) {
      ResponseDTO<Category> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado a categoria de ID %d", categoryId), null);

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Category> responseDTO = new ResponseDTO<>("Categoria encontrada com sucesso!",
        optionalCategory.get());

    return ResponseEntity.ok(responseDTO);
  }

  @PutMapping("/{categoryId}")
  public ResponseEntity<ResponseDTO<Category>> updateCategory(@PathVariable Long categoryId,
      @RequestBody CategoryDTO categoryDTO) {
    Optional<Category> optionalCategory = categoryService.updateCategory(categoryId, categoryDTO.toCategory());

    if (optionalCategory.isEmpty()) {
      ResponseDTO<Category> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado a categoria de ID %d", categoryId), null);

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Category> responseDTO = new ResponseDTO<>("Categoria atualizada com sucesso!", optionalCategory.get());

    return ResponseEntity.ok(responseDTO);
  }

  @DeleteMapping("/{categoryId}")
  public ResponseEntity<ResponseDTO<Category>> removeCategoryById(@PathVariable Long categoryId) {
    Optional<Category> optionalCategory = categoryService.removeCategoryById(categoryId);

    if (optionalCategory.isEmpty()) {
      ResponseDTO<Category> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado a categoria de ID %d", categoryId), null);

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Category> responseDTO = new ResponseDTO<>("Categoria removida com sucesso!", null);

    return ResponseEntity.ok(responseDTO);
  }
}
