package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.PatientDto;
import com.echbani.GestionRDV.services.MedicamentService;
import com.echbani.GestionRDV.services.PatientService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@RequiredArgsConstructor
@Tag(name = "patient")
public class PatientController {

    private final PatientService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody PatientDto dto){
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/")
    ResponseEntity<List<PatientDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<PatientDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }
    @GetMapping("/by-gender")
    ResponseEntity<Object> getSumOfPatientsByGender(){
        return ResponseEntity.ok(service.getSumOfPatientsByGender());
    }
    @GetMapping("/by-role")
    ResponseEntity<Object> getSumOfUsersByRole(){
        return ResponseEntity.ok(service.getSumOfUsersByRole());
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
