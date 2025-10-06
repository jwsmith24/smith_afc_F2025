package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Media;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediaRepository extends JpaRepository<Media, Long> {
}
