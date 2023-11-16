package com.betrybe.shopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.betrybe.shopping.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
