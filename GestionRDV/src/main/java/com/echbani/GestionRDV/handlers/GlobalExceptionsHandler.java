package com.echbani.GestionRDV.handlers;

import com.echbani.GestionRDV.exceptions.NotValideObjectException;
import com.echbani.GestionRDV.exceptions.OperationNotPermittedException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionsHandler {
    @ExceptionHandler(NotValideObjectException.class)
    ResponseEntity<?> handle(NotValideObjectException exception){
        ExceptionRepresentation representation= ExceptionRepresentation.builder()
                .errorMessage("not valid object exception has occured")
                .errorSource(exception.getViolationSource())
                .validationErrors(exception.getViolations())
                .build();

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(representation);
    }
    @ExceptionHandler(EntityNotFoundException.class)
    ResponseEntity<?> handle(EntityNotFoundException exception){
        ExceptionRepresentation representation= ExceptionRepresentation.builder()
                .errorMessage(exception.getMessage())
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(representation);
    }

    @ExceptionHandler(OperationNotPermittedException.class)
    ResponseEntity<?> handle(OperationNotPermittedException exception){
        ExceptionRepresentation representation= ExceptionRepresentation.builder()
                .errorMessage(exception.getMessage())
                .build();

        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(representation);
    }
    @ExceptionHandler(BadCredentialsException.class)
    ResponseEntity<?> handle(BadCredentialsException exception){
        ExceptionRepresentation representation= ExceptionRepresentation.builder()
                .errorMessage("Email or password incorrect")
                .errorSource(exception.getClass().getName())
                .validationErrors(null)
                .build();

        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(representation);
    }
}
