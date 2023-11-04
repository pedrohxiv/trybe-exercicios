package com.betrybe.taskmanager.dto;

/**
 * Task Creation DTO.
 */
public record TaskCreationDto(String title, String description, String ownerName) {
}
