package com.example.task.controller;

import com.example.task.entity.TaskEntity;
import com.example.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

    @CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.POST)
    @PostMapping("/addTask")
    public String addTask(@RequestBody TaskEntity task){
        taskService.addTask(task);
        return "Task added successfully...";
    }

    @CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.GET)
    @GetMapping("/getAllTask")
    public List<TaskEntity> getAllTask(){
        return taskService.getAllTask();
    }

    @CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.GET)
    @GetMapping("/getActiveTask")
    public List<TaskEntity> getActiveTask(){
        return taskService.getActiveTask();
    }

    @CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.GET)
    @GetMapping("/getCompletedTask")
    public List<TaskEntity> getCompletedTask(){
        return taskService.getCompletedTask();
    }

    @CrossOrigin(origins = "http://localhost:3000", methods = RequestMethod.PUT)
    @PutMapping("/updateActiveTask/{id}")
    public String updateActiveTask(@PathVariable Long id) {
        taskService.updateActiveTask(id);
        return "Update Successful";
    }

    @CrossOrigin(origins = "http://localhost:3000", methods = RequestMethod.DELETE)
    @DeleteMapping("/deleteTask/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "Task successfully deleted";
    }

}
