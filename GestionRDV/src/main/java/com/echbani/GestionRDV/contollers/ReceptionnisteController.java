package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.PatientDto;
import com.echbani.GestionRDV.dto.ReceptionnisteDto;
import com.echbani.GestionRDV.services.PatientService;
import com.echbani.GestionRDV.services.ReceptionnisteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/receptionnistes")
@RequiredArgsConstructor
@Tag(name = "receptionniste")
public class ReceptionnisteController {
    private final ReceptionnisteService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody ReceptionnisteDto dto){
        return ResponseEntity.ok(service.save(dto));
    }

    @GetMapping("/")
    ResponseEntity<List<ReceptionnisteDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<ReceptionnisteDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
