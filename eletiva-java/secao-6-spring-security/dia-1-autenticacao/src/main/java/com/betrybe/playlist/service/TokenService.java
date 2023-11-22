package com.betrybe.playlist.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.betrybe.playlist.entity.Person;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/** Token service class. */
@Service
public class TokenService {

  /** Attributes. */
  @Value("${api.security.token.secret}")
  private String secret;

  /** Generate token method. */
  public String generateToken(Person person) {
    Algorithm algorithm = Algorithm.HMAC256(secret);
    return JWT.create()
        .withIssuer("playlist")
        .withSubject(person.getUsername())
        .sign(algorithm);
  }

  /** Validate token method. */
  public String validateToken(String token) {
    Algorithm algorithm = Algorithm.HMAC256(secret);
    return JWT.require(algorithm)
        .withIssuer("playlist")
        .build()
        .verify(token)
        .getSubject();
  }

}
