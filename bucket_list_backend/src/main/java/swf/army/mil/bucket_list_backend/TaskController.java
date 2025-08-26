package swf.army.mil.bucket_list_backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController (TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping()
    public ResponseEntity<Task> createTask(@RequestBody Task newTask) {
        return ResponseEntity.ok(taskService.addTask(newTask));
    }

    @GetMapping()
    public ResponseEntity<List<Task>> getAllTasks() {
        return ResponseEntity.ok(taskService.getTaskList());
    }

    @GetMapping("/completed")
    public ResponseEntity<List<Task>> getCompletedTasks() {
        return ResponseEntity.ok(taskService.getCompletedTasks());
    }

    @GetMapping("/todo")
    public ResponseEntity<List<Task>> getUnfinishedTasks() {
        return ResponseEntity.ok(taskService.getUnfinishedTasks());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        taskService.updateTask(updatedTask);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/toggle_complete")
    public ResponseEntity<Task> toggleComplete(@PathVariable Long id) {
        taskService.toggleTaskCompletion(id);
        return ResponseEntity.noContent().build();
    }

}
