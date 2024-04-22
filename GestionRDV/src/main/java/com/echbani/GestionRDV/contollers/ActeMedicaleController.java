package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.ActeMedicaleDto;
import com.echbani.GestionRDV.services.ActeMedicaleService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/actes-medicales")
@RequiredArgsConstructor
@Tag(name = "acteMedicale")
public class ActeMedicaleController {
    private  final ActeMedicaleService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody ActeMedicaleDto acteMedicaleDto){
        return ResponseEntity.ok(service.save(acteMedicaleDto));
    }
    @GetMapping("/")
    ResponseEntity<List<ActeMedicaleDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/{acte-id}")
    ResponseEntity<ActeMedicaleDto> findById(@PathVariable("acte-id") Integer id){

        return ResponseEntity.ok(service.findById(id));
    }
    @DeleteMapping("{acte-id}")
    ResponseEntity<Void> delete(@PathVariable("acte-id") Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
