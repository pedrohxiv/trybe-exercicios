package com.betrybe.playlist.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Collection;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/** Person entity class. */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person implements UserDetails {

  /** Attributes. */
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  private String username;

  private String password;

  private Role role;

  /** Get authorities method. */
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority(role.getName()));
  }

  /** Is account non expired method. */
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  /** Is account non locked method. */
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  /** Is credentials non expired method. */
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  /** Is enabled method. */
  @Override
  public boolean isEnabled() {
    return true;
  }

}
