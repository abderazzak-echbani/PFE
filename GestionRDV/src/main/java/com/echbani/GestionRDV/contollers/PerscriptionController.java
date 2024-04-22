package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.PatientDto;
import com.echbani.GestionRDV.dto.PerscriptionDto;
import com.echbani.GestionRDV.services.PatientService;
import com.echbani.GestionRDV.services.PerscriptionService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/perscriptions")
@RequiredArgsConstructor
@Tag(name = "perscription")
public class PerscriptionController {
    private final PerscriptionService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody PerscriptionDto dto){
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/")
    ResponseEntity<List<PerscriptionDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<PerscriptionDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
