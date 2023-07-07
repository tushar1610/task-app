package com.example.task.service;

import com.example.task.entity.TaskEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {
    void addTask(TaskEntity task);

    List<TaskEntity> getAllTask();

    List<TaskEntity> getActiveTask();

    List<TaskEntity> getCompletedTask();

    void updateActiveTask(Long id);

    void deleteTask(Long id);
}
