package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Variant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VariantRepository extends JpaRepository<Variant, Long> {
}
