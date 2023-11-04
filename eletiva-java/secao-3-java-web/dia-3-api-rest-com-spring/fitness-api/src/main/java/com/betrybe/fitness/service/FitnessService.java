package com.betrybe.fitness.service;

import com.betrybe.fitness.database.FakeFitnessDatabase;
import com.betrybe.fitness.dto.WorkoutCreationDto;
import com.betrybe.fitness.dto.WorkoutDto;
import com.betrybe.fitness.model.Workout;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Fitness Service.
 */
@Service
public class FitnessService implements FitnessServiceInterface {
  FakeFitnessDatabase database;

  @Autowired
  public FitnessService(FakeFitnessDatabase database) {
    this.database = database;
  }

  @Override
  public WorkoutDto saveWorkout(WorkoutCreationDto newWorkoutDto) {
    Workout newWorkout = new Workout();

    newWorkout.setName(newWorkoutDto.name());
    newWorkout.setRepetitions(newWorkoutDto.repetitions());
    newWorkout.setSecretTechnique(newWorkoutDto.secretTechnique());

    Workout workout = database.saveWorkout(newWorkout);

    return new WorkoutDto(workout.getId(), workout.getName(), workout.getRepetitions());
  }

  @Override
  public Optional<WorkoutDto> getWorkout(Long id) {
    Optional<Workout> workoutOptional = database.getWorkout(id);

    if (workoutOptional.isEmpty()) {
      return Optional.empty();
    }

    Workout workout = workoutOptional.get();

    WorkoutDto workoutDto = new WorkoutDto(
        workout.getId(),
        workout.getName(),
        workout.getRepetitions());

    return Optional.of(workoutDto);
  }

  @Override
  public List<WorkoutDto> getAllWorkouts() {
    List<WorkoutDto> allWorkouts = new ArrayList<>();

    for (Workout workout : database.getAllWorkouts()) {
      allWorkouts.add(new WorkoutDto(workout.getId(), workout.getName(), workout.getRepetitions()));
    }

    return allWorkouts;
  }
}
