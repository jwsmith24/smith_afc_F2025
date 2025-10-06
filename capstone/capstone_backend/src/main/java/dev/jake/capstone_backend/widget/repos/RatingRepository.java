package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
}
