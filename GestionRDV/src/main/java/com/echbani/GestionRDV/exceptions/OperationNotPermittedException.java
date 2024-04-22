package com.echbani.GestionRDV.exceptions;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class OperationNotPermittedException extends RuntimeException{
    private final String errorMsg;
    private final String operationID;
    private final String source;
    private final String dependency;
}
