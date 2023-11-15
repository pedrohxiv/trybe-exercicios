package com.betrybe.exercicio.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.betrybe.exercicio.controllers.dto.BrandDTO;
import com.betrybe.exercicio.controllers.dto.ResponseDTO;
import com.betrybe.exercicio.models.entities.Brand;
import com.betrybe.exercicio.services.BrandService;

@RestController
@RequestMapping(value = "/brands")
public class BrandController {
  private final BrandService brandService;

  @Autowired
  public BrandController(BrandService brandService) {
    this.brandService = brandService;
  }

  @PostMapping()
  public ResponseEntity<ResponseDTO<Brand>> createBrand(@RequestBody BrandDTO brandDTO) {
    Brand newBrand = brandService.insertBrand(brandDTO.toBrand());

    ResponseDTO<Brand> responseDTO = new ResponseDTO<Brand>("Marca criada com sucesso!", newBrand);

    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @GetMapping()
  public List<BrandDTO> getAllBrands() {
    List<Brand> allBrands = brandService.getAllBrands();

    return allBrands.stream()
        .map(brand -> new BrandDTO(brand.getId(), brand.getName()))
        .collect(Collectors.toList());
  }

  @GetMapping("/{brandId}")
  public ResponseEntity<ResponseDTO<Brand>> getBrandById(@PathVariable Long brandId) {
    Optional<Brand> optionalBrand = brandService.getBrandById(brandId);

    if (optionalBrand.isEmpty()) {
      ResponseDTO<Brand> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado a marca de ID %d", brandId), null);

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Brand> responseDTO = new ResponseDTO<>("Marca encontrada com sucesso!",
        optionalBrand.get());

    return ResponseEntity.ok(responseDTO);
  }

  @PutMapping("/{brandId}")
  public ResponseEntity<ResponseDTO<Brand>> updateBrand(@PathVariable Long brandId,
      @RequestBody BrandDTO brandDTO) {
    Optional<Brand> optionalBrand = brandService.updateBrand(brandId, brandDTO.toBrand());

    if (optionalBrand.isEmpty()) {
      ResponseDTO<Brand> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado a marca de ID %d", brandId), null);

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Brand> responseDTO = new ResponseDTO<>("Marca atualizada com sucesso!", optionalBrand.get());

    return ResponseEntity.ok(responseDTO);
  }

  @DeleteMapping("/{brandId}")
  public ResponseEntity<ResponseDTO<Brand>> removeBrandById(@PathVariable Long brandId) {
    Optional<Brand> optionalBrand = brandService.removeBrandById(brandId);

    if (optionalBrand.isEmpty()) {
      ResponseDTO<Brand> responseDTO = new ResponseDTO<>(
          String.format("Não foi encontrado a marca de ID %d", brandId), null);

      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Brand> responseDTO = new ResponseDTO<>("Marca removida com sucesso!", null);

    return ResponseEntity.ok(responseDTO);
  }
}
