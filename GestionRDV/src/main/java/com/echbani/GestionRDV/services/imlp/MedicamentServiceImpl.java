package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.MedecinDto;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.models.Medicament;
import com.echbani.GestionRDV.repositories.MedecinRepository;
import com.echbani.GestionRDV.repositories.MedicamentRepository;
import com.echbani.GestionRDV.services.MedicamentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class MedicamentServiceImpl implements MedicamentService {
    private final MedicamentRepository medicamentRepository ;
    private final ObjectsValidator<MedicamentDto> validator;
    @Override
    public Integer save(MedicamentDto dto) {
        validator.validate(dto);
        Medicament medicament= MedicamentDto.toEntity(dto);
        return medicamentRepository.save(medicament).getId();
    }

    @Override
    public List<MedicamentDto> findAll() {
        return medicamentRepository.findAll()
                .stream()
                .map(MedicamentDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public MedicamentDto findById(Integer id) {
        return medicamentRepository.findById(id)
                .map(MedicamentDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no medicament was found by the provided ID "));
    }

    @Override
    public void delete(Integer id) {
        medicamentRepository.deleteById(id);
    }
}
