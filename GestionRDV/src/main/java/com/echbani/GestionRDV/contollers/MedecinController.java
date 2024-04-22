package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.MedecinDto;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.services.MedecinService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medecins")
@RequiredArgsConstructor
@Tag(name = "medecin")
public class MedecinController {
    private final MedecinService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody MedecinDto medecinDto){
        return ResponseEntity.ok(service.save(medecinDto));
    }
    @GetMapping("/")
    ResponseEntity<List<MedecinDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/{id}")
    ResponseEntity<MedecinDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }
    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
