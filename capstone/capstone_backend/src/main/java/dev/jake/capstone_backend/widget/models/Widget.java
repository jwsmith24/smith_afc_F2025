package dev.jake.capstone_backend.widget.models;

import dev.jake.capstone_backend.util.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.*;

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

    public Widget(String name, String description) {
        this.name = name;
        this.description = description;
    }

    // relationships
    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Variant> variants = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Rating> ratings = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Media> media = new ArrayList<>();


    // helpers
    public void addRating(Rating rating) {
        this.ratings.add(rating);
    }


}
