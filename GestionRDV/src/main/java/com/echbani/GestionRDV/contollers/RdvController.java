package com.echbani.GestionRDV.contollers;
import com.echbani.GestionRDV.dto.RdvDto;
import com.echbani.GestionRDV.dto.RdvSumDayDetails;
import com.echbani.GestionRDV.services.RdvService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/rdvs")
@RequiredArgsConstructor
@Tag(name = "rdv")
public class RdvController {
    private final RdvService service;
    @PostMapping("/")
    ResponseEntity<Integer> save(@RequestBody RdvDto dto){
        return ResponseEntity.ok(service.save(dto));
    }


    @GetMapping("/")
    ResponseEntity<List<RdvDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }
    @GetMapping("/unavailable-dates")
    ResponseEntity<List<Date>> getUnavailableDates(){
        return ResponseEntity.ok(service.getUnavailableDates());
    }
    @GetMapping("/unavailable-hours")
    ResponseEntity<List<String>> getUnavailableHours(String selectedDate){
        return ResponseEntity.ok(service.getUnavailableHours(selectedDate));
    }

    @GetMapping("/{id}")
    ResponseEntity<RdvDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/patient/{id}")
    ResponseEntity<List<RdvDto>> findAllByPatientId(@PathVariable Integer id){

        return ResponseEntity.ok(service.findAllByPatientId(id));
    }
    @GetMapping("/acte-medicale/{id}")
    ResponseEntity<List<RdvDto>> findAllByActeMedicaleId(@PathVariable Integer id){

        return ResponseEntity.ok(service.findAllByActeMedicaleId(id));
    }
    @GetMapping("/status/{id}")
    ResponseEntity<List<RdvDto>> findAllByStatusId(@PathVariable Integer id){

        return ResponseEntity.ok(service.findAllByStatusId(id));
    }
    @GetMapping("/total")
    ResponseEntity<Integer> getSumOfRdvs(){
        return ResponseEntity.ok(service.getSumOfRdvs());
    }

    @GetMapping("/total-by-status")
    ResponseEntity<List<Object>> getSumOfRdvsByStatus(){
        return ResponseEntity.ok(service.getSumOfRdvsByStatus());
    }
    @GetMapping("/total-by-acte-medicale")
    ResponseEntity<List<Object>> getSumOfRdvsByActeMedicale(){
        return ResponseEntity.ok(service.getSumOfRdvsByActeMedicale());
    }

    @GetMapping("/bydays")
    ResponseEntity<List<RdvSumDayDetails>> findTotalRdvByDay(
            @RequestParam("start") @DateTimeFormat(pattern ="yyyy-MM-dd") LocalDate start,
            @RequestParam("end") @DateTimeFormat(pattern ="yyyy-MM-dd")  LocalDate end)
                                    {
                                        return ResponseEntity.ok(service.findTotalRdvByDay(start,end));
                                    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.accepted().build();
    }
}
