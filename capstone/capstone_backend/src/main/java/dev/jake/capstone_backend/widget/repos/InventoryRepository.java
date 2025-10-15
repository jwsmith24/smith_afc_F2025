package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}
