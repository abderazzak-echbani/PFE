package com.echbani.GestionRDV.contollers;

import com.echbani.GestionRDV.dto.AddressDto;
import com.echbani.GestionRDV.services.AddressService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addresses")
@RequiredArgsConstructor
@Tag(name = "address")
public class AddressController {
    private final AddressService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody AddressDto addressDto){
        return ResponseEntity.ok(service.save(addressDto));
    }
    @GetMapping("/")
    ResponseEntity<List<AddressDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/{id}")
    ResponseEntity<AddressDto> findById(@PathVariable("id") Integer id){
        return ResponseEntity.ok().body(service.findById(id));
    }
    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
