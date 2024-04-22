package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.FactureDto;
import com.echbani.GestionRDV.services.FactureService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/factures")
@RequiredArgsConstructor
@Tag(name = "facture")
public class FactureController {
    private final FactureService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody FactureDto factureDto){
        return ResponseEntity.ok(service.save(factureDto));
    }
    @GetMapping("/")
    ResponseEntity<List<FactureDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/{id}")
    ResponseEntity<FactureDto> findById(@PathVariable Integer id){

        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
