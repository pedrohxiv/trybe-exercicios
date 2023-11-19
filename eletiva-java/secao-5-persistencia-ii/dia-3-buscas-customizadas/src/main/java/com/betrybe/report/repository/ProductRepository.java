package com.betrybe.report.repository;

import com.betrybe.report.entity.Product;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/** Product repository interface. */
public interface ProductRepository extends JpaRepository<Product, Long> {
  List<Product> findByExpirationDateBefore(LocalDate date);

  List<Product> findByExpirationDateAfter(LocalDate date);

  List<Product> findByExpirationDateBetween(LocalDate start, LocalDate end);
}
