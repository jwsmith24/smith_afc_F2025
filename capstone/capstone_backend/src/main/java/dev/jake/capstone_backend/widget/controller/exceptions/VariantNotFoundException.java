package dev.jake.capstone_backend.widget.controller.exceptions;

public class VariantNotFoundException extends RuntimeException {
    public VariantNotFoundException(Long id) {
        super("Variant with id: " + id + " not found");
    }
}
