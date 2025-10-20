package dev.jake.capstone_backend.widget.controller;

import dev.jake.capstone_backend.widget.controller.dto.responses.ErrorResponseDto;
import dev.jake.capstone_backend.widget.controller.exceptions.RatingNotFoundException;
import dev.jake.capstone_backend.widget.controller.exceptions.WidgetNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {


    // widget not found
    @ExceptionHandler(WidgetNotFoundException.class)
    public ResponseEntity<ErrorResponseDto> handleWidgetNotFound(
            WidgetNotFoundException e,
            WebRequest request
    ) {
        ErrorResponseDto error = new ErrorResponseDto(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                HttpStatus.NOT_FOUND.getReasonPhrase(),
                e.getMessage(),
                request.getDescription(true)
        );

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    // rating not found
    @ExceptionHandler(RatingNotFoundException.class)
    public ResponseEntity<ErrorResponseDto> handleRatingNotFound(
            RatingNotFoundException e,
            WebRequest request) {
        ErrorResponseDto error = new ErrorResponseDto(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                HttpStatus.NOT_FOUND.getReasonPhrase(),
                e.getMessage(),
                request.getDescription(true)
        );

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }


    // validation errors
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDto> handleValidationError(
            MethodArgumentNotValidException e,
            WebRequest request
    ) {
        String message = e.getBindingResult().getFieldErrors().stream()
                .map(error -> error.getField() + ": " + error.getDefaultMessage())
                .findFirst()
                .orElse("Validation failed");

        ErrorResponseDto error = new ErrorResponseDto(
                LocalDateTime.now(),
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                message,
                request.getDescription(true)
        );

        return ResponseEntity.badRequest().body(error);
    }


    // fallback
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDto> handleGenericException(
            Exception e,
            WebRequest request
    ) {
        ErrorResponseDto error = new ErrorResponseDto(
                LocalDateTime.now(),
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
                e.getMessage(),
                request.getDescription(true)
        );

        return ResponseEntity.internalServerError().body(error);
    }
}
