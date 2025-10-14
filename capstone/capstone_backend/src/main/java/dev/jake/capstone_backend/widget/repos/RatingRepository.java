package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> findAllByWidgetId(Long widgetId);
}
