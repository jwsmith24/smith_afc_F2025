package dev.jake.capstone_backend.widget.controller.dto.responses;

import java.time.LocalDateTime;

public record ErrorResponseDto(
        LocalDateTime timestamp,
        int status,
        String error,
        String message,
        String path

) {
}
