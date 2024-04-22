package com.echbani.GestionRDV.config.auth;

import com.echbani.GestionRDV.dto.PatientDto;
import com.echbani.GestionRDV.services.PatientService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Tag(name = "authentication")
public class AuthenticationController {
    private final PatientService patientService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody PatientDto dto
            ){
        return ResponseEntity.ok(patientService.register(dto));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(patientService.authenticate(request));
    }
}
