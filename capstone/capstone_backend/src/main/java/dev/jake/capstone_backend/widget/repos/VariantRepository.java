package dev.jake.capstone_backend.widget.repos;

import dev.jake.capstone_backend.widget.models.Variant;
import org.aspectj.weaver.ast.Var;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VariantRepository extends JpaRepository<Variant, Long> {


    @Query("""
                        SELECT v
                        FROM Variant v
                        LEFT JOIN FETCH v.inventory
                        WHERE v.widget.id = :widgetId
            """)
    List<Variant> findAllByWidgetIdWithInventory(@Param("widgetId") Long widgetId);


    @Query("""
           SELECT variant
           FROM Variant variant
           LEFT JOIN FETCH variant.inventory
           WHERE variant.id = :variantId
""")
    Optional<Variant> findByIdWithInventory(@Param("variantId") Long variantId);


    List<Variant> findByWidgetId(Long widgetId);

    List<Variant> findByColor(String color);

}
