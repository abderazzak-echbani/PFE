package com.echbani.GestionRDV.exceptions;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Set;
@RequiredArgsConstructor
public class NotValideObjectException extends RuntimeException{
    @Getter
    private final Set<String> violations;
    @Getter
    private final String ViolationSource;

}
