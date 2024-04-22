package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.services.MedicamentService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicaments")
@RequiredArgsConstructor
@Tag(name = "medicament")
public class MedicamentController {
    private final MedicamentService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody MedicamentDto medicamentDto){
        return ResponseEntity.ok(service.save(medicamentDto));
    }

    @GetMapping("/")
    ResponseEntity<List<MedicamentDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<MedicamentDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
