package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Variant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VariantRepository extends JpaRepository<Variant, Long> {
    List<Variant> findByWidgetId(Long widgetId);
    List<Variant> findByColor(String color);

}
