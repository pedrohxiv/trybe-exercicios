package com.betrybe.trybetrack.util;

import com.betrybe.trybetrack.models.entities.Person;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class AuditorAwareUser implements AuditorAware<String> {
  @Override
  public Optional<String> getCurrentAuditor() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    if (auth == null) {
      return Optional.of("unknown");
    }
    Person auditor = (Person) auth.getPrincipal();
    return Optional.of(auditor.getEmail());
  }
}