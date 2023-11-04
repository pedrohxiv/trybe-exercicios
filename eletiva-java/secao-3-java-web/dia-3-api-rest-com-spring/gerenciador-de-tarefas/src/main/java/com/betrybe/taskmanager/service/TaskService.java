package com.betrybe.taskmanager.service;

import com.betrybe.taskmanager.database.FakeTaskDatabase;
import com.betrybe.taskmanager.database.TaskDatabaseInterface;
import com.betrybe.taskmanager.dto.TaskCreationDto;
import com.betrybe.taskmanager.dto.TaskDto;
import com.betrybe.taskmanager.model.TaskModel;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Task Service.
 */
@Service
public class TaskService {
  TaskDatabaseInterface database;

  private TaskDto modelToDto(TaskModel task) {
    return new TaskDto(task.getId(), task.getTitle(), task.getDescription(), task.getOwnerName(),
        task.getIsCompleted());
  }

  @Autowired
  public TaskService(FakeTaskDatabase database) {
    this.database = database;
  }

  /**
   * List all Tasks.
   *
   * @return List
   */
  public List<TaskDto> getAllTasks() {
    List<TaskModel> tasks = database.getAllTasks();

    List<TaskDto> taskDto = new ArrayList<>();

    for (TaskModel task : tasks) {
      taskDto.add(modelToDto(task));
    }

    return taskDto;
  }

  /**
   * Get Task by ID.
   *
   * @param id String
   * @return task
   */
  public TaskDto getTaskById(String id) {
    TaskModel task = database.getTaskById(id);

    return modelToDto(task);
  }

  /**
   * Create Task.
   *
   * @param taskData Task Creation DTO
   * @return String
   */
  public String saveTask(TaskCreationDto taskData) {
    TaskModel newTask = database
        .createTask(taskData.title(), taskData.description(), taskData.ownerName());
    return newTask.getId();
  }

  public void setTaskWithIdAsComplete(String id) {
    TaskModel task = database.getTaskById(id);
    task.setIsCompleted(true);
  }

  public boolean deleteTaskById(String id) {
    database.removeTaskById(id);
    return true;
  }
}
