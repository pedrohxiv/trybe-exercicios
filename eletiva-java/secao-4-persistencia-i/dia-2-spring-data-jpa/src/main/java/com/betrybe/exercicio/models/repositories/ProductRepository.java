package com.betrybe.exercicio.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.betrybe.exercicio.models.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
