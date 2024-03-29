package com.betrybe.report.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Product entity class. */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
  /** Attributes. */
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private LocalDate manufactureDate;
  private LocalDate expirationDate;
}
