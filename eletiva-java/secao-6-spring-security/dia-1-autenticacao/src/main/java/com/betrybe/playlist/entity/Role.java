package com.betrybe.playlist.entity;

/** Role enum. */
public enum Role {
  PREMIUM("ROLE_PREMIUM"),
  FREE("ROLE_FREE");

  private final String name;

  Role(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}
