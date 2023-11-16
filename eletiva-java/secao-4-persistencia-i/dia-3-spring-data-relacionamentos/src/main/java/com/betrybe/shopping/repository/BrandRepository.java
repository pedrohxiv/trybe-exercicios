package com.betrybe.shopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.betrybe.shopping.entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

}
