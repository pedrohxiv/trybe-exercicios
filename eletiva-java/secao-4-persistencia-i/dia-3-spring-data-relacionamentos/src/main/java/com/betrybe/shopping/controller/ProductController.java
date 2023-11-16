package com.betrybe.shopping.controller;

import com.betrybe.shopping.controller.dto.ProductCreationDto;
import com.betrybe.shopping.entity.Category;
import com.betrybe.shopping.entity.Product;
import com.betrybe.shopping.entity.ProductDetail;
import com.betrybe.shopping.service.ProductDetailService;
import com.betrybe.shopping.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

  private final ProductService productService;
  private final ProductDetailService productDetailService;

  @Autowired
  public ProductController(ProductService productService, ProductDetailService productDetailService) {
    this.productService = productService;
    this.productDetailService = productDetailService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Product create(@RequestBody ProductCreationDto dto) {
    Product product = dto.toEntityWithoutBrand();

    return productService.create(product, dto.brandId());
  }

  @GetMapping
  public List<Product> findAll() {
    return productService.findAll();
  }

  @GetMapping("/{productId}")
  public Product findById(@PathVariable Long productId) {
    return productService.findById(productId);
  }

  @PatchMapping("/{productId}")
  public Product update(@PathVariable Long productId, @RequestBody ProductCreationDto dto) {
    return productService.update(productId, dto.toEntityWithoutBrand());
  }

  @DeleteMapping("/{productId}")
  public void delete(@PathVariable Long productId) {
    productService.delete(productId);
  }

  @GetMapping("/{productId}/categories")
  public List<Category> getCategories(@PathVariable Long productId) {
    return productService
        .findById(productId)
        .getCategories();
  }

  @PutMapping("/{productId}/categories/{categoryId}")
  public Product associateProductAndCategory(@PathVariable Long productId, @PathVariable Long categoryId) {
    return productService.associateProductAndCategory(productId, categoryId);
  }

  @GetMapping("/details")
  public List<ProductDetail> findAllDetails() {
    return productDetailService.findAll();
  }

}
