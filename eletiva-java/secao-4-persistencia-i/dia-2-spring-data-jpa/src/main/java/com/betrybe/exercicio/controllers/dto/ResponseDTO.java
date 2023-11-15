package com.betrybe.exercicio.controllers.dto;

public record ResponseDTO<T>(String message, T data) {
}
