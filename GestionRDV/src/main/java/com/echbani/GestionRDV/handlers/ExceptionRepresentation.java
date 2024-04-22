package com.echbani.GestionRDV.handlers;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;
@Getter
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
//@JsonInclude annotation sert pour laisser des champs vide par exemple validationErrors
public class ExceptionRepresentation {
    private String errorMessage;
    private String errorSource;
    Set<String> validationErrors;

}
