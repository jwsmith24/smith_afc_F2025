package dev.jake.capstone_backend.inventory;

import dev.jake.capstone_backend.util.BaseEntity;
import dev.jake.capstone_backend.widget.models.Variant;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Inventory extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", nullable = false)
    private Variant variant;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private String status;
}
