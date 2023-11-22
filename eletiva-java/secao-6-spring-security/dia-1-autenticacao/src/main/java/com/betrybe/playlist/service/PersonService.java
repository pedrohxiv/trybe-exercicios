package com.betrybe.playlist.service;

import com.betrybe.playlist.entity.Person;
import com.betrybe.playlist.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/** Person service class. */
@Service
public class PersonService implements UserDetailsService {
  
  /** Attributes. */
  private final PersonRepository personRepository;

  /** Constructor method. */
  @Autowired
  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  /** Insert person method. */
  public Person insert(Person person) {
    String hashedPassword = new BCryptPasswordEncoder().encode(person.getPassword());

    person.setPassword(hashedPassword);

    return personRepository.save(person);
  }

  /** Load user by username method. */
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return personRepository.findByUsername(username);
  }

}
