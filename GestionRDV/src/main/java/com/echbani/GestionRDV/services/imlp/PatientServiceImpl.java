package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.config.JwtService;
import com.echbani.GestionRDV.config.auth.AuthenticationRequest;
import com.echbani.GestionRDV.config.auth.AuthenticationResponse;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.PatientDto;
import com.echbani.GestionRDV.models.Patient;
import com.echbani.GestionRDV.models.Role;
import com.echbani.GestionRDV.repositories.PatientRepository;
import com.echbani.GestionRDV.services.PatientService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
    private final ObjectsValidator<PatientDto> validator;
    private final PatientRepository patientRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authManager;


    @Override
    public Integer save(PatientDto dto) {
        validator.validate(dto);
        Patient patient=PatientDto.toEntity(dto);
        return patientRepository.save(patient).getId();
    }

    @Override
    public List<PatientDto> findAll() {
        return patientRepository.findAll()
                .stream()
                .map(PatientDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public PatientDto findById(Integer id) {
        return patientRepository.findById(id)
                .map(PatientDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no patient was foun with the provide ID"));
    }

    @Override
    public void delete(Integer id) {

        patientRepository.deleteById(id);
    }
    @Transactional
    @Override
    public AuthenticationResponse register(PatientDto dto) {
        validator.validate(dto);

        Patient patient=PatientDto.toEntity(dto);
        patient.setPassword(passwordEncoder.encode(dto.getPassword()));
        patient.setRole(Role.PATIENT);

        var savedPatient=patientRepository.save(patient);
        Map<String,Object> claims=new HashMap<>();
        claims.put("patientId",savedPatient.getId());
        claims.put("fullName",savedPatient.getFirstname()+" "+savedPatient.getLastname());
        String token=jwtService.generateToken(claims,savedPatient);
        return AuthenticationResponse.builder()
                .token(token).build();
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
         Patient patient = patientRepository.findByEmail(request.getEmail()).get();

        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", patient.getId());
        claims.put("fullName", patient.getFirstname() + " " + patient.getLastname());
        claims.put("authority",patient.getRole());
        final String token = jwtService.generateToken(claims,patient);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

    @Override
    public List<Object> getSumOfPatientsByGender() {
        return patientRepository.getSumOfPatientsByGender();
    }

    @Override
    public List<Object> getSumOfUsersByRole() {
        return patientRepository.getSumOfUsersByRole();
    }
}
