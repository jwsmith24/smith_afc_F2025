package dev.jake.capstone_backend.widget.controller.dto.responses;

public record MediaDto(
        Long widgetId,
        String url,
        boolean isPrimary
) {
}
