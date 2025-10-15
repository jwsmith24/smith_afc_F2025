package dev.jake.capstone_backend.widget.controller.dto.requests;

public record CreateVariantRequest(
        String color,
        String size,
        Integer initialQuantity

) {
}
