package com.echbani.GestionRDV.services.imlp;

import com.echbani.GestionRDV.ObjectsValidator;
import com.echbani.GestionRDV.dto.FactureDto;
import com.echbani.GestionRDV.models.Facture;
import com.echbani.GestionRDV.repositories.FactureRepository;
import com.echbani.GestionRDV.services.FactureService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class FactureServiceImpl implements FactureService {
    private final FactureRepository factureRepository;
    private final ObjectsValidator<FactureDto> validator;
    @Override
    public Integer save(FactureDto dto) {
        validator.validate(dto);
        Facture facture=FactureDto.toEntity(dto);
        return factureRepository.save(facture).getId();
    }

    @Override
    public List<FactureDto> findAll() {
        return factureRepository.findAll()
                .stream()
                .map(FactureDto::fromEnity)
                .collect(Collectors.toList());
    }

    @Override
    public FactureDto findById(Integer id) {
        return factureRepository.findById(id)
                .map(FactureDto::fromEnity)
                .orElseThrow(()->new EntityNotFoundException("no facture was found with the provided ID"));
    }

    @Override
    public void delete(Integer id) {
factureRepository.deleteById(id);
    }


}
