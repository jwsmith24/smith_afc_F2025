package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Media;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MediaRepository extends JpaRepository<Media, Long> {

    List<Media> findAllByWidget_Id(Long widgetId);
}
