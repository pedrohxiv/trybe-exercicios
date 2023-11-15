package com.betrybe.exercicio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.betrybe.exercicio.models.entities.Brand;
import com.betrybe.exercicio.models.repositories.BrandRepository;

@Service
public class BrandService {
  private final BrandRepository brandRepository;

  @Autowired
  public BrandService(BrandRepository brandRepository) {
    this.brandRepository = brandRepository;
  }

  public Brand insertBrand(Brand brand) {
    return brandRepository.save(brand);
  }

  public List<Brand> getAllBrands() {
    return brandRepository.findAll();
  }

  public Optional<Brand> getBrandById(Long id) {
    return brandRepository.findById(id);
  }

  public Optional<Brand> updateBrand(Long id, Brand brand) {
    Optional<Brand> optionalBrand = brandRepository.findById(id);

    if (optionalBrand.isPresent()) {
      Brand existingBrand = optionalBrand.get();

      existingBrand.setName(brand.getName());

      Brand updatedBrand = brandRepository.save(existingBrand);

      return Optional.of(updatedBrand);
    }

    return optionalBrand;
  }

  public Optional<Brand> removeBrandById(Long id) {
    Optional<Brand> optionalBrand = brandRepository.findById(id);

    if (optionalBrand.isPresent()) {
      brandRepository.deleteById(id);
    }

    return optionalBrand;
  }
}
