package com.betrybe.exercicio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.betrybe.exercicio.models.entities.Product;
import com.betrybe.exercicio.models.repositories.ProductRepository;

@Service
public class ProductService {
  private final ProductRepository productRepository;

  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public Product insertProduct(Product product) {
    return productRepository.save(product);
  }

  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  public Optional<Product> getProductById(Long id) {
    return productRepository.findById(id);
  }

  public Optional<Product> updateProduct(Long id, Product product) {
    Optional<Product> optionalProduct = productRepository.findById(id);

    if (optionalProduct.isPresent()) {
      Product existingProduct = optionalProduct.get();

      existingProduct.setName(product.getName());
      existingProduct.setPrice(product.getPrice());

      Product updatedProduct = productRepository.save(existingProduct);

      return Optional.of(updatedProduct);
    }

    return optionalProduct;
  }

  public Optional<Product> removeProductById(Long id) {
    Optional<Product> optionalProduct = productRepository.findById(id);

    if (optionalProduct.isPresent()) {
      productRepository.deleteById(id);
    }

    return optionalProduct;
  }
}
