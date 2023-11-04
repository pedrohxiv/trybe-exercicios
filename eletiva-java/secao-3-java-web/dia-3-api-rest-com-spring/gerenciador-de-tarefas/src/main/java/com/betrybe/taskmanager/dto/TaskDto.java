package com.betrybe.taskmanager.dto;

/**
 * Task DTO.
 */
public record TaskDto(
    String id,
    String title,
    String description,
    String ownerName,
    Boolean isComplete) {
}