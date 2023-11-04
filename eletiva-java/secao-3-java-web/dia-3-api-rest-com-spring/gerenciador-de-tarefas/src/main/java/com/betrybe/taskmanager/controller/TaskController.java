package com.betrybe.taskmanager.controller;

import com.betrybe.taskmanager.dto.TaskCreationDto;
import com.betrybe.taskmanager.dto.TaskDto;
import com.betrybe.taskmanager.service.TaskService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {
  TaskService service;

  @Autowired
  public TaskController(TaskService service) {
    this.service = service;
  }

  @GetMapping
  public ResponseEntity<List<TaskDto>> getAllTasks() {
    return ResponseEntity.ok(service.getAllTasks());
  }

  @GetMapping("/{id}")
  public ResponseEntity<TaskDto> getTaskById(@PathVariable String id) {
    return ResponseEntity.ok(service.getTaskById(id));
  }

  @PostMapping
  public ResponseEntity<String> saveTask(@PathVariable TaskCreationDto body) {
    String newTaskId = service.saveTask(body);
    return ResponseEntity.status(HttpStatus.CREATED).body(newTaskId);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Void> completeTaskWithId(@PathVariable String id) {
    service.setTaskWithIdAsComplete(id);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> removeTaskById(@PathVariable String id) {
    service.deleteTaskById(id);
    return ResponseEntity.noContent().build();
  }
}
