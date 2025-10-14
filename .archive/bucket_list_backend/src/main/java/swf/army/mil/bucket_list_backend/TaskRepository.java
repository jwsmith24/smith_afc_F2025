package swf.army.mil.bucket_list_backend;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findTasksByComplete(boolean complete);
}
