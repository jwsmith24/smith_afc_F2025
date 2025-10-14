package swf.army.mil.bucket_list_backend;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository taskRepository) {
        this.repository = taskRepository;
    }

    public Task addTask(Task newTask) {
        return repository.save(newTask);
    }

    public List<Task> getTaskList() {
        return repository.findAll();
    }

    public List<Task> getCompletedTasks() {
        return repository.findTasksByComplete(true);
    }

    public List<Task> getUnfinishedTasks() {
        return repository.findTasksByComplete(false);
    }

    public void deleteTask(Long id) {
        repository.deleteById(id);
    }

    public void updateTask(Task updatedTask) {
        repository.save(updatedTask);
    }

    public void toggleTaskCompletion(Long id) {
        Task target = repository.findById(id).orElseThrow();
        target.setComplete(!target.isComplete());
        repository.save(target);
    }

}
