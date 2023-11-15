package com.betrybe.exercicio.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.betrybe.exercicio.models.entities.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

}
