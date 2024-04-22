package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.OrdonnanceDto;
import com.echbani.GestionRDV.services.MedicamentService;
import com.echbani.GestionRDV.services.OrdonnanceService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ordonnances")
@RequiredArgsConstructor
@Tag(name = "ordonnance")
public class OrdonnanceController {
    private final OrdonnanceService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody OrdonnanceDto dto){
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/")
    ResponseEntity<List<OrdonnanceDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<OrdonnanceDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
