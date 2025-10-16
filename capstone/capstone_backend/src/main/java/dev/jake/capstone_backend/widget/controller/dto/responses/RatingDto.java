package dev.jake.capstone_backend.widget.controller.dto.responses;

import java.time.Instant;


public record RatingDto(Long id, Integer score, String comment, Instant created,
                        Instant updated) {
}
