package dev.jake.capstone_backend.widget.models;

import dev.jake.capstone_backend.util.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Widget extends BaseEntity {

    private String name;

    private String description;

    // relationships
    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Variant> variants = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Rating> ratings = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Media> media = new ArrayList<>();


}
