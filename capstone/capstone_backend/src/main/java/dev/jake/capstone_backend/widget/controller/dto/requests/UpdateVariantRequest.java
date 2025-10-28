package dev.jake.capstone_backend.widget.controller.dto.requests;

public record UpdateVariantRequest(
        String color,
        String size,
        Integer quantity
) {
}
