package com.betrybe.playlist.repository;

import com.betrybe.playlist.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

/** Person repository interface. */
public interface PersonRepository extends JpaRepository<Person, Long> {

  UserDetails findByUsername(String username);

}
