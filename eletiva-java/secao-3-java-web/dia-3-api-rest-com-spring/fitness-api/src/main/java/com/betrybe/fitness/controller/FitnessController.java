package com.betrybe.fitness.controller;

import com.betrybe.fitness.dto.WorkoutCreationDto;
import com.betrybe.fitness.dto.WorkoutDto;
import com.betrybe.fitness.service.FitnessServiceInterface;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Fitness Controller.
 */
@RestController
@RequestMapping("/fitness")
public class FitnessController implements FitnessControllerInterface {
  FitnessServiceInterface service;

  @Autowired
  public FitnessController(FitnessServiceInterface service) {
    this.service = service;
  }

  @GetMapping
  public String getRoot() {
    return "Boas vindas à API de Fitness!";
  }

  /**
   * Get one workout.
   *
   * @param id Long
   * @return Response
   */
  @GetMapping("/workouts/{id}")
  public ResponseEntity<WorkoutDto> getWorkout(@PathVariable Long id) {
    Optional<WorkoutDto> workoutDto = service.getWorkout(id);

    if (workoutDto.isEmpty()) {
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.ok(workoutDto.get());
  }

  @GetMapping("/workouts")
  public List<WorkoutDto> getWorkouts() {
    return service.getAllWorkouts();
  }

  @PostMapping("/workouts")
  public ResponseEntity<WorkoutDto> createWorkout(@RequestBody WorkoutCreationDto newWorkoutDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.saveWorkout(newWorkoutDto));
  }
}
