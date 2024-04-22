package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.MedicamentDto;
import com.echbani.GestionRDV.dto.PerscriptionDto;
import com.echbani.GestionRDV.models.Perscription;
import com.echbani.GestionRDV.repositories.PerscriptionRepository;
import com.echbani.GestionRDV.services.PerscriptionService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class PerscriptionServiceImpl implements PerscriptionService {
    private final ObjectsValidator<PerscriptionDto> validator;
    private final PerscriptionRepository perscriptionRepository;
    @Override
    public Integer save(PerscriptionDto dto) {
        validator.validate(dto);
        Perscription perscription=PerscriptionDto.toEntity(dto);

        return perscriptionRepository.save(perscription).getId();
    }

    @Override
    public List<PerscriptionDto> findAll() {
        return perscriptionRepository.findAll()
                .stream()
                .map(PerscriptionDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public PerscriptionDto findById(Integer id) {
        return perscriptionRepository.findById(id)
                .map(PerscriptionDto::fromEntity)
                .orElseThrow(()->new EntityNotFoundException("no Perscription was foun with the provide ID"));
    }

    @Override
    public void delete(Integer id) {
    perscriptionRepository.deleteById(id);
    }
}
