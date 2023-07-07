package com.example.task.service;

import com.example.task.entity.TaskEntity;
import com.example.task.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public void addTask(TaskEntity task) {
        taskRepository.save(task);
    }

    @Override
    public List<TaskEntity> getAllTask() {
        return taskRepository.findAll();
    }

    @Override
    public List<TaskEntity> getActiveTask() {
        return taskRepository.findAllByStatus("active");
    }

    @Override
    public List<TaskEntity> getCompletedTask() {
        return taskRepository.findAllByStatus("completed");
    }

    @Override
    public void updateActiveTask(Long id) {
        TaskEntity task = taskRepository.findById(id).get();
        task.setStatus("completed");
        taskRepository.save(task);
    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
