package com.betrybe.report.service;

import com.betrybe.report.entity.Product;
import com.betrybe.report.repository.ProductRepository;
import com.betrybe.report.service.exception.InvalidDateException;
import com.betrybe.report.service.exception.ProductNotFoundException;
import com.betrybe.report.util.PropertyMapper;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/** Product service class. */
@Service
public class ProductService {
  /** Attributes. */
  private final ProductRepository productRepository;

  /** Constructor method. */
  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  /** Find all products method. */
  public List<Product> findAll() {
    return productRepository.findAll();
  }

  /** Create product method. */
  public Product create(Product product) {
    if (product.getExpirationDate().isBefore(product.getManufactureDate())) {
      throw new InvalidDateException();
    }
    return productRepository.save(product);
  }

  /** Find product by ID method. */
  public Product findById(long id) {
    return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
  }

  /** Delete product method. */
  public void delete(long id) {
    productRepository.deleteById(id);
  }

  /** Update product method. */
  public Product update(long id, Product product) {
    Product productDb = findById(id);
    PropertyMapper.copyNonNullProperties(product, productDb);
    return productRepository.save(productDb);
  }

  /** Find expired products method. */
  public List<Product> findExpiredProducts() {
    List<Product> products = findAll();
    return products.stream()
        .filter(product -> product.getExpirationDate().isBefore(LocalDate.now()))
        .toList();
  }

  /** Find non-expired products method. */
  public List<Product> findNonExpiredProducts() {
    List<Product> products = findAll();
    return products.stream()
        .filter(product -> product.getExpirationDate().isAfter(LocalDate.now()))
        .toList();
  }

  /** Find expired products in interval method. */
  public List<Product> findExpiresAtProducts(LocalDate start, LocalDate end) {
    List<Product> products = findAll();
    return products.stream()
        .filter(product -> product.getExpirationDate().isBefore(end)
            && product.getExpirationDate().isAfter(start))
        .toList();
  }
}
