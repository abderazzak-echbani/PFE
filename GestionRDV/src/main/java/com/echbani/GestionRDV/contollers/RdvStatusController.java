package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.RdvStatusDto;
import com.echbani.GestionRDV.services.RdvStatusService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rdv-status")
@RequiredArgsConstructor
@Tag(name = "rdvStatus")
public class RdvStatusController {
    private final RdvStatusService service;

    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody RdvStatusDto rdvStatusDto){
        return  ResponseEntity.ok(service.save(rdvStatusDto));
    }
    @GetMapping("/")
    ResponseEntity<List<RdvStatusDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{status-id}")
    ResponseEntity<RdvStatusDto> findById(@PathVariable("status-id") Integer id){
        return ResponseEntity.ok(service.findById(id));
    }
    @DeleteMapping("/{status-id}")
    ResponseEntity<Void> delete(@PathVariable("status-id") Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
