package com.betrybe.exercicio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.betrybe.exercicio.models.entities.Category;
import com.betrybe.exercicio.models.repositories.CategoryRepository;

@Service
public class CategoryService {
  private final CategoryRepository categoryRepository;

  @Autowired
  public CategoryService(CategoryRepository categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  public Category insertCategory(Category category) {
    return categoryRepository.save(category);
  }

  public List<Category> getAllCategories() {
    return categoryRepository.findAll();
  }

  public Optional<Category> getCategoryById(Long id) {
    return categoryRepository.findById(id);
  }

  public Optional<Category> updateCategory(Long id, Category category) {
    Optional<Category> optionalCategory = categoryRepository.findById(id);

    if (optionalCategory.isPresent()) {
      Category existingCategory = optionalCategory.get();

      existingCategory.setName(category.getName());

      Category updatedCategory = categoryRepository.save(existingCategory);

      return Optional.of(updatedCategory);
    }

    return optionalCategory;
  }

  public Optional<Category> removeCategoryById(Long id) {
    Optional<Category> optionalCategory = categoryRepository.findById(id);

    if (optionalCategory.isPresent()) {
      categoryRepository.deleteById(id);
    }

    return optionalCategory;
  }
}
