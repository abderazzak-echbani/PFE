package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.ConsultationDto;
import com.echbani.GestionRDV.services.ConsultationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultations")
@RequiredArgsConstructor
@Tag(name = "consultation")
public class ConsultationController {
    private final ConsultationService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody ConsultationDto consultationDto){
        return ResponseEntity.ok(service.save(consultationDto));
    }
    @GetMapping("/")
    ResponseEntity<List<ConsultationDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<ConsultationDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }
    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
