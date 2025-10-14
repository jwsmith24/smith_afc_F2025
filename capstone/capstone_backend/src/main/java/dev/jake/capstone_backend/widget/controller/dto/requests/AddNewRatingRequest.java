package dev.jake.capstone_backend.widget.controller.dto.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AddNewRatingRequest(@NotNull Integer score, @NotBlank String comment) {
}
