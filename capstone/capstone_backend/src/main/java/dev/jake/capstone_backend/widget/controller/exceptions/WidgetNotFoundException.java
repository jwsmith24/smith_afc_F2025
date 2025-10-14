package dev.jake.capstone_backend.widget.controller.exceptions;

public class WidgetNotFoundException extends RuntimeException {
    public WidgetNotFoundException(Long targetId) {
        super("Widget with id: " + targetId + " not found.");
    }
}
