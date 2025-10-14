package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Widget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WidgetRepository extends JpaRepository<Widget, Long> {
}
