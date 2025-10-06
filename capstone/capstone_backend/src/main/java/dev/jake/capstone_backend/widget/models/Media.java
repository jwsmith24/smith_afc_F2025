package dev.jake.capstone_backend.widget.models;

import dev.jake.capstone_backend.util.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Media extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "widget_id", nullable = false)
    private Widget widget;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private boolean isPrimary;
}
