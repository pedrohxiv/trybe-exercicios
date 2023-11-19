package com.betrybe.report.repository;

import com.betrybe.report.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/** Product repository interface. */
public interface ProductRepository extends JpaRepository<Product, Long> {

}
