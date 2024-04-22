package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.OrdonnanceDto;
import com.echbani.GestionRDV.models.Ordonnance;
import com.echbani.GestionRDV.repositories.OrdonnanceRepository;
import com.echbani.GestionRDV.services.OrdonnanceService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class OrdonnanceServiceImpl implements OrdonnanceService {
    private final OrdonnanceRepository ordonnanceRepository;
    private final ObjectsValidator<OrdonnanceDto> validator;
    @Override
    public Integer save(OrdonnanceDto dto) {
        validator.validate(dto);
        Ordonnance ordonnance=OrdonnanceDto.toEntity(dto);
        return ordonnanceRepository.save(ordonnance).getId();
    }

    @Override
    public List<OrdonnanceDto> findAll() {
        return ordonnanceRepository.findAll().stream()
                .map(OrdonnanceDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public OrdonnanceDto findById(Integer id) {
        return ordonnanceRepository.findById(id)
                .map(OrdonnanceDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no ordonnance was  found by the provided id"));
    }

    @Override
    public void delete(Integer id) {
            ordonnanceRepository.deleteById(id);
    }
}
