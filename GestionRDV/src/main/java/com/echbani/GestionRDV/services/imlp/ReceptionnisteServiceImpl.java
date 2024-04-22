package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.ReceptionnisteDto;
import com.echbani.GestionRDV.models.Receptionniste;
import com.echbani.GestionRDV.repositories.ReceptionnisteRepository;
import com.echbani.GestionRDV.services.ReceptionnisteService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class ReceptionnisteServiceImpl implements ReceptionnisteService {
    private final ObjectsValidator<ReceptionnisteDto> validator;
    private final ReceptionnisteRepository receptionnisteRepository;
    @Override
    public Integer save(ReceptionnisteDto dto) {
        validator.validate(dto);
        Receptionniste receptionniste= ReceptionnisteDto.toEntity(dto);
        return receptionnisteRepository.save(receptionniste).getId();
    }

    @Override
    public List<ReceptionnisteDto> findAll() {
        return receptionnisteRepository.findAll()
                .stream()
                .map(ReceptionnisteDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public ReceptionnisteDto findById(Integer id) {
        return receptionnisteRepository.findById(id)
                .map(ReceptionnisteDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no recep was found with the provide ID"));
    }

    @Override
    public void delete(Integer id) {
    receptionnisteRepository.deleteById(id);
    }
}
