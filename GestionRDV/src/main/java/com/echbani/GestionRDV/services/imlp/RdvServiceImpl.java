package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.RdvDto;
import com.echbani.GestionRDV.dto.RdvSumDayDetails;
import com.echbani.GestionRDV.models.Rdv;
import com.echbani.GestionRDV.repositories.RdvRepository;
import com.echbani.GestionRDV.services.RdvService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class RdvServiceImpl implements RdvService {
    private final RdvRepository rdvRepository;
    private final ObjectsValidator<RdvDto> validator;
    @Override
    public Integer save(RdvDto dto) {
        validator.validate(dto);
        Rdv rdv=RdvDto.toEntity(dto);
        return rdvRepository.save(rdv).getId();
    }

    @Override
    public List<RdvDto> findAll() {
        return rdvRepository.findAll()
                .stream()
                .map(RdvDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public RdvDto findById(Integer id) {
        return rdvRepository.findById(id)
                .map(RdvDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no RDV was found with the provide ID"));
    }

    @Override
    public void delete(Integer id) {
rdvRepository.deleteById(id);
    }

    @Override
    public List<RdvDto> findAllByPatientId(Integer id) {
        return rdvRepository.findAllByPatientId(id)
                .stream()
                .map(RdvDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<RdvDto> findAllByStatusId(Integer id) {
        return rdvRepository.findAllByStatusId(id)
                .stream()
                .map(RdvDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<RdvDto> findAllByActeMedicaleId(Integer id) {
        return rdvRepository.findAllByActeMedicaleId(id)
                .stream()
                .map(RdvDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<RdvSumDayDetails> findTotalRdvByDay(LocalDate startDate, LocalDate endDate) {
        LocalDateTime start=LocalDateTime.of(startDate, LocalTime.of(0,0,0));
        LocalDateTime end=LocalDateTime.of(endDate, LocalTime.of(23,59,59));
        return rdvRepository.findTotalRdvByDay(start,end);
    }

    @Override
    public List<Date> getUnavailableDates() {
        return rdvRepository.getUnavailableDates();
    }

    @Override
    public List<String> getUnavailableHours(String selectedDate) {
        return rdvRepository.getUnavailableHours(selectedDate);
    }

    @Override
    public Integer getSumOfRdvs() {
        return rdvRepository.getSumOfRdvs();
    }

    @Override
    public List<Object> getSumOfRdvsByStatus() {
        return rdvRepository.getSumOfRdvsByStatus();
    }

    @Override
    public List<Object> getSumOfRdvsByActeMedicale() {
        return rdvRepository.getSumOfRdvsByActeMedicale();
    }


}
