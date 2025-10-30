package dev.jake.capstone_backend.widget.controller.dto.requests;

import jakarta.validation.constraints.NotNull;

public record CreateNewWidgetRequest (
        @NotNull String name,
        @NotNull String description,
        @NotNull String baseColor,
        @NotNull Integer initialQuantity
){
}
