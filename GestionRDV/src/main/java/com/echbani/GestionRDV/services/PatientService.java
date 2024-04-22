package com.echbani.GestionRDV.services;

import com.echbani.GestionRDV.config.auth.AuthenticationRequest;
import com.echbani.GestionRDV.config.auth.AuthenticationResponse;
import com.echbani.GestionRDV.dto.PatientDto;

import java.util.List;

public interface PatientService extends AbstractService<PatientDto>{
    AuthenticationResponse register(PatientDto user);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    List<Object> getSumOfPatientsByGender();
    List<Object> getSumOfUsersByRole();
}
